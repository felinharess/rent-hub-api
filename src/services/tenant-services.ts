import * as TenantsRepository from '../repositories/tenants-repository';
import * as httpResponse from '../utils/http-helper';

export const getTenantService = async () => {
    try {
        const data = await TenantsRepository.findAllTenants();
        return await httpResponse.ok(data);
    }catch(error){
        console.log("Internal Server error:", error);
        return await httpResponse.internalServerError(error);
    };

};