// SPDX-License-Identifier: MIT

/*

The library defines a token asset as a struct of token identifiers. It wraps transfer, allowance & balance check calls of the following token standards:
- ERC20
- ERC721
- ERC1155
Unifying the function calls used within the PWN context (not having to worry about handling those individually).

Read more: https://github.com/PWNFinance/MultiToken

*/
pragma solidity ^0.8.26;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {IERC1155} from "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

/**
 * @title Category
 * @dev enum representation Asset category
 */
enum Category {
    ERC20,
    ERC721,
    ERC1155
}

library MultiToken {
    /**
     * @title Asset
     * @param assetAddress Address of the token contract defining the asset
     * @param category Corresponding asset category
     * @param amount Amount of fungible tokens or 0 -> 1
     * @param id TokenID of an NFT or 0
     */
    struct Asset {
        address assetAddress;
        Category category;
        uint256 amount;
        uint256 id;
    }

    /**
     * @notice Thrown when unsupported category is used.
     * @param categoryValue Value of the unsupported category.
     */
    error UnsupportedCategory(uint8 categoryValue);

    /**
     * transferAsset
     * @dev wrapping function for transfer calls on various token interfaces
     * @param _asset Struct defining all necessary context of a token
     * @param _dest Destination address
     */
    function transferAsset(
        Asset memory _asset,
        address _dest
    ) internal returns (bool) {
        return _transferAssetFrom(_asset, address(this), _dest);
    }

    /**
     * transferAssetFrom
     * @dev wrapping function for transfer From calls on various token interfaces
     * @param _asset Struct defining all necessary context of a token
     * @param _source Account/address that provided the allowance
     * @param _dest Destination address
     */
    function transferAssetFrom(
        Asset memory _asset,
        address _source,
        address _dest
    ) internal returns (bool) {
        return _transferAssetFrom(_asset, _source, _dest);
    }

    /**
     * approveAsset
     * @dev wrapping function for approve calls on various token interfaces
     * @param _asset Struct defining all necessary context of a token
     * @param _target Target address to be checked
     */
    function approveAsset(Asset memory _asset, address _target) internal {
        if (_asset.category == Category.ERC20) {
            IERC20 token = IERC20(_asset.assetAddress);
            token.approve(_target, _asset.amount);
        } else if (_asset.category == Category.ERC721) {
            IERC721 token = IERC721(_asset.assetAddress);
            token.approve(_target, _asset.id);
        } else if (_asset.category == Category.ERC1155) {
            IERC1155 token = IERC1155(_asset.assetAddress);
            token.setApprovalForAll(_target, true);
        } else {
            revert UnsupportedCategory(uint8(_asset.category));
        }
    }

    /**
     * balanceOf
     * @dev wrapping function for checking balances on various token interfaces
     * @param _asset Struct defining all necessary context of a token
     * @param _target Target address to be checked
     */
    function balanceOf(
        Asset memory _asset,
        address _target
    ) internal view returns (uint256) {
        if (_asset.category == Category.ERC20) {
            IERC20 token = IERC20(_asset.assetAddress);
            return token.balanceOf(_target);
        } else if (_asset.category == Category.ERC721) {
            IERC721 token = IERC721(_asset.assetAddress);
            if (token.ownerOf(_asset.id) == _target) {
                return 1;
            } else {
                return 0;
            }
        } else if (_asset.category == Category.ERC1155) {
            IERC1155 token = IERC1155(_asset.assetAddress);
            return token.balanceOf(_target, _asset.id);
        } else {
            revert UnsupportedCategory(uint8(_asset.category));
        }
    }

    /**
     * isValid
     * @dev checks that assets amount and id is valid in stated category
     * @dev this function don't check that stated category is indeed the category of a contract on a stated address
     * @param _asset Asset that is examined
     * @return True if assets amount and id is valid in stated category
     */
    function isValid(Asset memory _asset) internal pure returns (bool) {
        // ERC20 token has to have id set to 0
        if (_asset.category == Category.ERC20 && _asset.id != 0) return false;

        // ERC721 token has to have amount set to 1
        if (_asset.category == Category.ERC721 && _asset.amount != 1)
            return false;

        // Any categories have to have non-zero amount
        if (_asset.amount == 0) return false;

        return true;
    }

    /**
     * isSameAs
     * @dev compare two assets, ignoring their amounts
     * @param _asset First asset to examine
     * @param _otherAsset Second asset to examine
     * @return True if both structs represents the same asset
     */
    function isSameAs(
        Asset memory _asset,
        Asset memory _otherAsset
    ) internal pure returns (bool) {
        return
            _asset.assetAddress == _otherAsset.assetAddress &&
            _asset.category == _otherAsset.category &&
            _asset.id == _otherAsset.id;
    }

    /**
     * _transferAssetFrom
     * @dev private wrapping function for transfer From calls on various token interfaces
     * @param _asset Struct defining all necessary context of a token
     * @param _source Account/address that provided the allowance
     * @param _dest Destination address
     */
    function _transferAssetFrom(
        Asset memory _asset,
        address _source,
        address _dest
    ) private returns (bool) {
        bool success;
        bytes memory data;

        if (_asset.category == Category.ERC20) {
            // Call ERC20 transferFrom function
            // solhint-disable-next-line avoid-low-level-calls
            (success, data) = _asset.assetAddress.call(
                abi.encodeWithSelector(
                    IERC20.transferFrom.selector,
                    _source,
                    _dest,
                    _asset.amount
                )
            );

            // Check if the call was successful and that the data is either empty or decodes to true
            return success && (data.length == 0 || abi.decode(data, (bool)));
        } else if (_asset.category == Category.ERC721) {
            // Call ERC721 safeTransferFrom function
            // solhint-disable-next-line avoid-low-level-calls
            (success, ) = _asset.assetAddress.call(
                abi.encodeWithSignature(
                    "safeTransferFrom(address,address,uint256)",
                    _source,
                    _dest,
                    _asset.id,
                    ""
                )
            );

            return success;
        } else if (_asset.category == Category.ERC1155) {
            uint256 amountToTransfer = _asset.amount == 0 ? 1 : _asset.amount;

            // Call ERC1155 safeTransferFrom function
            // solhint-disable-next-line avoid-low-level-calls
            (success, ) = _asset.assetAddress.call(
                abi.encodeWithSelector(
                    IERC1155.safeTransferFrom.selector,
                    _source,
                    _dest,
                    _asset.id,
                    amountToTransfer,
                    ""
                )
            );

            return success;
        } else {
            revert UnsupportedCategory(uint8(_asset.category));
        }
    }
}
