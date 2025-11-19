import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export default class ApiResponse<T> {
    success!: boolean;
    payload?: T;
    errors?: string[];

    static sendSuccess<U>(res: Response, statusCode: StatusCodes, payload: U): ApiResponse<U> {
        const apiResponse = new ApiResponse<U>();
        apiResponse.success = true;
        apiResponse.payload = payload;

        res.status(statusCode).json({
            success: true,
            payload
        });
        return { success: true, payload };
    }

    static sendError(res: Response, statusCode: StatusCodes, errors: string[]): ApiResponse<null> {
        const apiResponse = new ApiResponse<null>();
        apiResponse.success = false;
        apiResponse.errors = errors;
        res.status(statusCode).json({
            success: false,
            errors
        });
        return { success: false, errors };
    }

}