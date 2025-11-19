import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ApiResponse from '../../../core/types/Api.Response';
export const status = (req: Request, res: Response) => {
    ApiResponse.sendSuccess(res, StatusCodes.OK, { message: "Chatbot routes working!" })
}