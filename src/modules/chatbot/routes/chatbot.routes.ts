import { Router } from "express";
import { status } from "../controller/chatbot.controller";

const chatbotRoutes = Router();

chatbotRoutes.get("/status", status);

export default chatbotRoutes;