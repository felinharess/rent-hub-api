import { Tenant as TenantInterface } from "../interfaces/tenant-interface";
import { Tenant } from "../models/Tenant";

export const findAllTenants = async (): Promise<TenantInterface[]> => {
    const data = await Tenant.findAll({ raw: true });

    return data as unknown as TenantInterface[];
};
export const findTenantById = async (id: number): Promise<TenantInterface> =>{
    const data = await Tenant.findByPk(id);
    
    return data as unknown as TenantInterface;
};
export const createTenant = async (tenant: TenantInterface) =>{
    await Tenant.create(tenant as any);
}