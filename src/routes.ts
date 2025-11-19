import express from 'express';
import chatbotRoutes from "./modules/chatbot/routes/chatbot.routes";

const routes = express.Router();

routes.use("/chatbot", chatbotRoutes);


export default routes;