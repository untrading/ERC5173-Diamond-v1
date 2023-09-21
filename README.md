# ERC-5173 Diamond v1
 
ERC-5173 proposes a multigenerational reward mechanism that rewards‌ all ‌owners of non-fungible tokens (NFT). This implementation uses the ERC-2535 Diamond Standard.
 
## Development

Install dependencies with Yarn:

```bash
yarn install
```

Create a .env file and define the following:

| Key                         | Description                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| `INFURA_TOKEN`              | [Infura](https://www.infura.io/) API key for node connectivity           |
| `ETHERSCAN_API_KEY`         | [Etherscan](https://etherscan.io//) API key for source code verification |
| `DEPLOYER_PRIVATE_KEY`      | Private key used for deploying the contracts                             |

## Testing

Test contracts with Hardhat:

```bash
yarn hardhat test
```

## Licensing

The primary license for the ERC-5173 Diamond contracts is the Business Source License 1.1 (`BUSL-1.1`), see [`LICENSE`](./LICENSE).

### Exceptions

- Interfaces are licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers), see [`LICENSE_GPL`](./LICENSE_GPL)
- All files in `contracts/test` remain unlicensed.
