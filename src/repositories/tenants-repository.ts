import { Tenant as TenantInterface } from "../interfaces/tenant-interface";
import { Tenant } from "../models/Tenant";

export const findAllTenants = async (): Promise<TenantInterface[]> => {
    const data = await Tenant.findAll({ raw: true });

    return data as unknown as TenantInterface[];
};
/*export const findTenantById = async (id: number): Promise<TenantInterface | undefined> => {
    const data: TenantInterface[] = JSON.parse(await fs.readFile('./src/data/tenant.json', 'utf-8'));
    const tenant = data.find((tenant) => tenant.id === id);
    return tenant;
};
export const createTenant = async (tenant: TenantInterface): Promise<TenantInterface> => {
    const data: TenantInterface[] = JSON.parse(await fs.readFile('./src/data/tenant.json', 'utf-8'));
    data.push(tenant);

    await fs.writeFile('./src/data/tenant.json', JSON.stringify(data, null, 2));

    return tenant;
};
export const updateTenant = async (id: number, updatedTenant: Partial<TenantInterface>): Promise<TenantInterface | null> => {
    const data: TenantInterface[] = JSON.parse(await fs.readFile('./src/data/tenant.json', 'utf-8'));
    const tenantIndex = data.findIndex((tenant) => tenant.id === id);

    if (tenantIndex === -1) {
        return null;
    }
    data[tenantIndex] = { ...data[tenantIndex], ...updatedTenant };
    await fs.writeFile(
        './src/data/tenant.json',
        JSON.stringify(data, null, 2)
    );

    return data[tenantIndex];

};
*/