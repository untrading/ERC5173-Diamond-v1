// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.8;

import "@solidstate/contracts/proxy/diamond/SolidStateDiamond.sol";
import {IERC165} from "@solidstate/contracts/interfaces/IERC165.sol";
import {ERC165BaseStorage} from "@solidstate/contracts/introspection/ERC165/base/ERC165BaseStorage.sol";
import {ERC721MetadataStorage} from "@solidstate/contracts/token/ERC721/metadata/ERC721MetadataStorage.sol";
import {IERC721} from "@solidstate/contracts/interfaces/IERC721.sol";

import "./nFR/InFR.sol";

contract nFRDiamond is SolidStateDiamond {
    using ERC165BaseStorage for ERC165BaseStorage.Layout;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI
    ) {
        ERC721MetadataStorage.Layout storage l = ERC721MetadataStorage.layout();
        l.name = name;
        l.symbol = symbol;
        l.baseURI = baseURI;

        ERC165BaseStorage.layout().supportedInterfaces[type(IERC165).interfaceId] = true;
        ERC165BaseStorage.layout().supportedInterfaces[type(IERC721).interfaceId] = true;
        ERC165BaseStorage.layout().supportedInterfaces[type(InFR).interfaceId] = true;
    }
}
