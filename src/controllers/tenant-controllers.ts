import { Request, Response } from 'express';
import * as TenantServices from '../services/tenant-services';

export const getTenant = async (req: Request, res: Response) => {
    const httpResponse = await TenantServices.getTenantService();
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getTenantById = async(req: Request, res: Response) =>{
    const id = Number(req.params.id);
    const httpResponse = await TenantServices.getTenantByIdService(id);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createTenant = async(req: Request, res: Response) =>{
    const tenant = req.body;
    const httpResponse = await TenantServices.postTenantService(tenant);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
};