import express from 'express';
import chatbotRoutes from "./modules/chatbot/routes/chatbot.routes";
import sessionRoutes from './modules/session/routes/session.routes';

const routes = express.Router();

routes.use("/chatbot", chatbotRoutes);
routes.use("/session", sessionRoutes);

export default routes;