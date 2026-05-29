import { Tenant as TenantInterface } from "../interfaces/tenant-interface";
import * as TenantsRepository from '../repositories/tenants-repository';
import * as httpResponse from '../utils/http-helper';

export const getTenantService = async () => {
    try {
        const data = await TenantsRepository.findAllTenants();
        return await httpResponse.ok(data);
    } catch (error) {
        console.log("Internal Server error:", error);
        return await httpResponse.internalServerError(error);
    };

};
export const getTenantByIdService = async (id: number) => {
    try {
        const data = await TenantsRepository.findTenantById(id);
        return await httpResponse.ok(data);
    } catch (error) {
        console.log("Internal Server error:", error);
        return await httpResponse.internalServerError(error);
    }
}
export const postTenantService = async (tenant: TenantInterface) => {
    try {
        const data = await TenantsRepository.createTenant(tenant);
        return await httpResponse.created();
    } catch (error) {
        console.log("Internal Server error:", error);
        return await httpResponse.internalServerError(error);
    }
}