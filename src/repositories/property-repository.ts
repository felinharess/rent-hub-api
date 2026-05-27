import { Property as PropertyModel } from "../models/property-model";
import fs from 'fs/promises';

export const findAllPropertis = async(): Promise<PropertyModel[]> =>{
    const data = await fs.readFile('./src/data/property.json', 'utf-8');
    const properties: PropertyModel[] = JSON.parse(data);
    return properties;
}