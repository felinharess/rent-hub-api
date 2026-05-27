import { Router } from "express";
import tenantRouter from './tenant-routes';

const routes = Router();

routes.use('/tenant', tenantRouter);

export default routes;