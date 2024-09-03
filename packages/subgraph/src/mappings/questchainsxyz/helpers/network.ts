import { dataSource } from "@graphprotocol/graph-ts";

export function getChainId(): i32 {
  const network = dataSource.network();
  if (network == "mainnet") return 1;
  else if (network == "sepolia") return 11155111;
  else if (network == "holesky") return 17000;
  else if (network == "gnosis") return 100;
  else if (network == "matic") return 137;
  else if (network == "base") return 8453;
  else if (network == "arbitrum-one") return 42161;
  else if (network == "arbitrum-sepolia") return 421614;
  else if (network == "optimism") return 10;
  else if (network == "optimism-sepolia") return 11155420;
  else if (network == "local") return 31337;
  else if (network == "localnet") return 31337;
  else if (network == "hardhat") return 31337;
  else if (network == "anvil") return 42;
  else return 0;
}
