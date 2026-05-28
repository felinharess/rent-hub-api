import * as TenantsRepository from '../repositories/tenants-repository';
import * as httpResponse from '../utils/http-helper';

export const getTenantService = async() =>{
    const data = await TenantsRepository.findAllTenants();
    return await httpResponse.ok(data);
};