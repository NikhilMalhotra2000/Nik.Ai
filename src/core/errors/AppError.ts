import { StatusCodes } from "http-status-codes";

export default class AppError extends Error {
    statusCode: StatusCodes;
    constructor(message: string, statusCode: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}