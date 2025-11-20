import express from "express";
import logger from "./config/logger.js";
import { globalExceptionHandler } from "./core/middlewares/exceptionHandler.js";
import helmet from "helmet";
import { corsMiddleware } from "./config/cors.js";
import ApiResponse from "./core/types/Api.Response.js";
import { StatusCodes } from "http-status-codes";
import routes from "./routes.js";
import { initSession } from "./config/session.js";

const app = express();


//helmet security middlewares
app.use(helmet());
app.use(helmet.contentSecurityPolicy({'useDefaults': true}))
app.use(helmet.noSniff());

//cors
app.use(corsMiddleware);

//body parser
app.use(express.json());

//session
await initSession(app);


app.get("/health", (req, res) => {
    logger.info("Health check endpoint called");
    ApiResponse.sendSuccess(res, StatusCodes.OK, { status: "OK" });
});


app.use("/api", routes);


app.use(globalExceptionHandler); //global exception handler


export default app;