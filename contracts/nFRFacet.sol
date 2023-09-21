// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.8;

import {SolidStateERC721} from "@solidstate/contracts/token/ERC721/SolidStateERC721.sol";
import {ERC721MetadataStorage} from "@solidstate/contracts/token/ERC721/metadata/ERC721MetadataStorage.sol";

import {CounterStorage} from "./utils/CounterStorage.sol";

import "./nFR/nFR.sol";

contract nFRFacet is nFR {
    using CounterStorage for CounterStorage.Layout;

    function mintNFT(
        address recipient,
        uint8 numGenerations,
        uint256 percentOfProfit,
        uint256 successiveRatio,
        string memory tokenURI
    ) external {
        CounterStorage.incrementTokenId();

        uint256 newItemId = CounterStorage.layout().tokenIds;
        _mint(recipient, newItemId, numGenerations, percentOfProfit, successiveRatio);
        _setTokenURI(newItemId, tokenURI);
    }

    function mintERC721(address recipient, string memory tokenURI) external {
        CounterStorage.incrementTokenId();

        uint256 newItemId = CounterStorage.layout().tokenIds;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
    }

    function setDefaultFRInfo(
        uint8 numGenerations,
        uint256 percentOfProfit,
        uint256 successiveRatio
    ) external {
        _setDefaultFRInfo(numGenerations, percentOfProfit, successiveRatio);
    }

    function burnNFT(uint256 tokenId) external {
        _burn(tokenId);
    }

    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal {
        ERC721MetadataStorage.Layout storage l = ERC721MetadataStorage.layout();
        l.tokenURIs[tokenId] = tokenURI;
    }
}
