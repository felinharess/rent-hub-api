import { Contract as ContractModel } from "../models/contract-model";
import fs from 'fs/promises';

export const findAllContracts = async(): Promise<ContractModel[]> =>{
    const data = await fs.readFile('./src/data/contract.json', 'utf-8');
    const contracts: ContractModel[] = JSON.parse(data);
    return contracts
}