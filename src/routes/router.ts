import express from 'express';
import { login } from '../controllers/auth.controller.ts';

const routes = express.Router();

routes.post('/login', login as express.RequestHandler);

export default routes;