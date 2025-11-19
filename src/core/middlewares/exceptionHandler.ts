import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import logger from "../../config/logger";
import { StatusCodes } from "http-status-codes";
import ENV from "../../config/env.js";


export function globalExceptionHandler(error: Error | AppError,req: Request, res: Response, next: NextFunction) {
    if(!(error instanceof Error) || !("statusCode" in error)) {
        logger.error("Unexpected error type caught in ErrorHandler middleware", { error });
        error = new AppError(error.message || "Internal Server Error", StatusCodes.INTERNAL_SERVER_ERROR);
    }

    const statusCode = (error as AppError).statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const errorMessage = error.message || "Internal Server Error";

    logger.error(`Error: ${errorMessage}`, { stack: error.stack });

    res.status(statusCode).json({
        success: false,
        errorMessage,
        ...(ENV.NODE_ENV === "development" ? { stack: error.stack } : "")
    });
}