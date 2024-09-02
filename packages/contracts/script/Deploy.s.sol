// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {console2 as console} from "forge-std/console2.sol";
import {stdJson} from "forge-std/StdJson.sol";

import {GigManager} from "../src/GigManager.sol";
import {MockWETH} from "../src/mocks/MockWETH.sol";
import {MockToken} from "../src/mocks/MockToken.sol";
import {SmartInvoiceFactory} from "../src/smartinvoicexyz/SmartInvoiceFactory.sol";
import {SmartInvoiceUpdatable} from "../src/smartinvoicexyz/SmartInvoiceUpdatable.sol";
import {QuestChain} from "../src/questchainsxyz/QuestChain.sol";
import {QuestChainFactory} from "../src/questchainsxyz/QuestChainFactory.sol";
import {QuestChainToken} from "../src/questchainsxyz/QuestChainToken.sol";

contract DeployScript is Script {
    using stdJson for string;

    string public _version = "0.0.1";
    uint256 public deployerPrivateKey;
    address public deployer;

    bytes32 public SALT = bytes32(keccak256(abi.encode("CS")));

    function setUp() public {
        // string memory mnemonic = vm.envString("MNEMONIC");
        // if (bytes(mnemonic).length > 0) {
        //     (deployer, deployerPrivateKey) = deriveRememberKey(mnemonic, 0);
        // }

        if (deployerPrivateKey == 0) {
            deployerPrivateKey = vm.envUint("PRIVATE_KEY");
            deployer = vm.addr(deployerPrivateKey);
        }

        console.log("\n");
        console.log("Deployer address:", deployer);
        console.log("Deployer balance:", deployer.balance);
    }

    struct Deployment {
        MockWETH weth;
        MockToken token;
        SmartInvoiceFactory factory;
        SmartInvoiceUpdatable updatable;
        GigManager gigManager;
        QuestChain questChain;
        QuestChainFactory questChainFactory;
        QuestChainToken questChainToken;
    }

    function getDeploymentFile() internal view virtual returns (string memory) {
        string memory root = vm.projectRoot();
        return string.concat(root, "/deployments/", vm.toString(block.chainid), ".json");
    }

    function saveDeployment(Deployment memory deployment) public virtual {
        string memory json = "";

        // contract addresses
        vm.serializeAddress(json, "MockWETH", address(deployment.weth));
        vm.serializeAddress(json, "MockToken", address(deployment.token));
        vm.serializeAddress(json, "SmartInvoiceFactory", address(deployment.factory));
        vm.serializeAddress(json, "SmartInvoiceUpdatable", address(deployment.updatable));
        vm.serializeAddress(json, "GigManager", address(deployment.gigManager));
        vm.serializeAddress(json, "QuestChain", address(deployment.questChain));
        vm.serializeAddress(json, "QuestChainFactory", address(deployment.questChainFactory));
        json = vm.serializeAddress(json, "QuestChainToken", address(deployment.questChainToken));

        vm.writeJson(json, getDeploymentFile());

        console.log("Deployment JSON file written successfully:", getDeploymentFile());
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);

        MockWETH weth = new MockWETH();
        MockToken token = new MockToken();

        SmartInvoiceFactory factory = new SmartInvoiceFactory(address(weth));
        SmartInvoiceUpdatable updatable = new SmartInvoiceUpdatable();
        factory.addImplementation(bytes32("updatable"), address(updatable));

        GigManager gigManager = new GigManager(address(factory), deployer, address(weth));

        QuestChain questChain = new QuestChain();
        QuestChainFactory questChainFactory = new QuestChainFactory(address(questChain), deployer);
        QuestChainToken questChainToken = QuestChainToken(address(questChainFactory.questChainToken()));

        console.log("Deployed WETH:", address(weth));
        console.log("Deployed Token:", address(token));
        console.log("Deployed SmartInvoiceFactory:", address(factory));
        console.log("Deployed SmartInvoiceUpdatable:", address(updatable));
        console.log("Deployed GigManager:", address(gigManager));
        console.log("Deployed QuestChain:", address(questChain));
        console.log("Deployed QuestChainFactory:", address(questChainFactory));
        console.log("Deployed QuestChainToken:", address(questChainToken));

        Deployment memory deployment = Deployment({
            weth: weth,
            token: token,
            factory: factory,
            updatable: updatable,
            gigManager: gigManager,
            questChain: questChain,
            questChainFactory: questChainFactory,
            questChainToken: questChainToken
        });

        saveDeployment(deployment);

        vm.stopBroadcast();
    }
}
