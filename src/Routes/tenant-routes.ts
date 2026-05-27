import { Router } from "express";
import * as TenantControllers from  '../controllers/tenant-controllers';

const tenantRouter = Router();

tenantRouter.get('', TenantControllers.getTenant);

export default tenantRouter;