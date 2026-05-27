import { Tenant as TenantModel } from "../models/tenant-model";
import fs from 'fs/promises';

export const findAllTenants = async(): Promise<TenantModel[]> =>{
    const data : TenantModel[] = JSON.parse(await fs.readFile('./src/data/tenant.json', 'utf-8'));
    return data;
};
export const findTenantById = async(id: number): Promise<TenantModel | undefined> =>{
    const data : TenantModel[] = JSON.parse(await fs.readFile('./src/data/tenant.json', 'utf-8'));
    const tenant = data.find((tenant) => tenant.id === id);
    return tenant;
};
export const createTenant = async (tenant: TenantModel): Promise<TenantModel>=>{
    const data : TenantModel[] = JSON.parse(await fs.readFile('./src/data/tenant.json', 'utf-8'));
    data.push(tenant);

    await fs.writeFile('./src/data/tenant.json', JSON.stringify(data,null,2));

    return tenant;
};
export const updateTenant = async(id: number, updatedTenant: Partial<TenantModel>): Promise<TenantModel | null> =>{
    const data: TenantModel[] = JSON.parse(await fs.readFile('./src/data/tenant.json', 'utf-8'));
    const tenantIndex = data.findIndex((tenant) => tenant.id === id);
    
    if(tenantIndex === -1){
        return null;
    }
    data[tenantIndex] = { ...data[tenantIndex], ...updatedTenant };
      await fs.writeFile(
    './src/data/tenant.json',
    JSON.stringify(data, null, 2)
  );

  return data[tenantIndex];

};