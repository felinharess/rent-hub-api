import { Router } from "express";
import * as TenantControllers from  '../controllers/tenant-controllers';

const tenantRouter = Router();

tenantRouter.get('', TenantControllers.getTenant);
tenantRouter.get('/:id', TenantControllers.getTenantById);
tenantRouter.post('', TenantControllers.createTenant);

export default tenantRouter;