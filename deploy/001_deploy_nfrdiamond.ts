import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { parseUnits } from 'ethers/lib/utils';

const name = "My Awesome nFR Diamond";
const symbol = "nFRNFT";
const baseURI = "";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
	const {deployments, getNamedAccounts} = hre;
	const {deploy} = deployments;

	const { deployer } = await getNamedAccounts();

	await deploy('nFRDiamond', {
		from: deployer,
		args: [ name, symbol, baseURI ],
	});
};

export default func;
func.tags = ["nFRDiamond"]