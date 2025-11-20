import express from 'express';
import { destroySession, generateSession } from '../controller/session.controller';

const sessionRoutes = express.Router();

sessionRoutes.post("/generate", generateSession);
sessionRoutes.delete("/destroy", destroySession);


export default sessionRoutes;