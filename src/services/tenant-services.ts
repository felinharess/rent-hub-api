import * as TenantsRepository from '../repositories/tenants-repository';
import * as httpResponse from '../utils/http-helper';

export const getTenantService = async() =>{
    const data = await TenantsRepository.findAllTenants();
    let response = null;
    if(data) {
        response = await httpResponse.ok(data);
    }else {
        response = await httpResponse.notFound();
    }
    return response;
}