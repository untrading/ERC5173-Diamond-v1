import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { Selectors, FacetCutAction } from '../test/libraries/diamond';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, ethers } = hre;
	const { execute, get } = deployments;

	const { deployer } = await getNamedAccounts();

    const nFRFacet = await ethers.getContractAt("nFRFacet", (await get('nFRFacet')).address);

    const cut = [{ target: nFRFacet.address, action: FacetCutAction.Add, selectors: new Selectors(nFRFacet).remove(['supportsInterface(bytes4)']) }];

	await execute('nFRDiamond', {from: deployer}, 'diamondCut', cut, ethers.constants.AddressZero, "0x");
};

export default func;
func.tags = ["DiamondCutAdd"];
