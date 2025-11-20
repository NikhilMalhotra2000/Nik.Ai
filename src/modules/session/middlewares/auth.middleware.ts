import {Request, Response, NextFunction } from "express";
import ApiResponse from "../../../core/types/Api.Response";
import { StatusCodes } from "http-status-codes";

export const sessionAuth = (req: Request, res: Response, next: NextFunction) => {
    if(!req.session) {
        ApiResponse.sendError(res,StatusCodes.UNAUTHORIZED, ["Invalid or missing session-id"]);
    }
    next();
}