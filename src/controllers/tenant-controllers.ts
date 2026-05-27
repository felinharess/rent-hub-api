import { Request, Response } from 'express';
import * as TenantServices from '../services/tenant-services';

export const getTenant = async(req: Request, res: Response) =>{
    const httpResponse = await TenantServices.getTenantService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};
