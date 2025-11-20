import { NextFunction, Request, Response } from "express";
import SessionService from "../service/session.service";
import ApiResponse from "../../../core/types/Api.Response";
import { StatusCodes } from "http-status-codes";
import logger from "../../../config/logger";

export const generateSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionData = await SessionService.regenerateSession(req);
        ApiResponse.sendSuccess(res, StatusCodes.CREATED, sessionData);
    } catch (error) {
        logger.error("Error generating session", error);
        next(error);
    }
}

export const destroySession = async (req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("Destroying session", req.session);
        await SessionService.destroySession(req);
        ApiResponse.sendSuccess(res, StatusCodes.OK, null);
    } catch (error) {
        logger.error("Error destroying session", error);
        next(error);
    }

}