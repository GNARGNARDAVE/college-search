import { Router } from 'express';
import { info  } from './controllers';

export const routes = Router();

routes.get('/info', info.get);