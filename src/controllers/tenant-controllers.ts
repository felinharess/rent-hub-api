import { Request, Response } from 'express';
import * as TenantServices from '../services/tenant-services';
import * as httpHelper from '../utils/http-helper'
export const getTenant = async (req: Request, res: Response) => {
    try {
        const httpResponse = await TenantServices.getTenantService();
        return res.status(httpResponse.statusCode).json(httpResponse.body);

    } catch (error) {
        console.log("Error: ", error)
        let response = await httpHelper.internalServerError(error);
        return res.status(response.statusCode).json(response.body)
    }
};
