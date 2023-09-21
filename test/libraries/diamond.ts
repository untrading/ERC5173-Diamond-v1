import { Contract } from "ethers";

export const FacetCutAction = { Add: 0, Replace: 1, Remove: 2 };

export class Selectors {
    private contract: Contract;
    private selectors: string[];

    constructor(contract: Contract) { 
        this.contract = contract;
        this.selectors = this._getSelectors();
    }

    private _getSelectors = () => {
        const { contract } = this;

        const signatures: string[] = Object.keys(contract.interface.functions);
    
        const selectors: string[] = signatures.reduce((acc: string[], val: string) => {
            if (val !== 'init(bytes)') {
              acc.push(contract.interface.getSighash(val))
            }
            return acc
          }, []);

          return selectors;
    }

    public getSelectors = () => {
        return this.selectors;
    }

    public remove = (removedSelectors: string[]) => {
        this.selectors = this.selectors.filter((v: string) => {
            for (const functionName of removedSelectors) {
                if (v === this.contract.interface.getSighash(functionName)) {
                    return false;
                }
            }
            return true;
        });
        
        return this.selectors;
    }
}