import AppError from "./AppError";
import { StatusCodes } from "http-status-codes";

export class UnauthorizedError extends AppError {
    constructor(message: string = "Unauthorized") {
        super(message, StatusCodes.UNAUTHORIZED);
    }   
}

export class BadRequestError extends AppError {
    constructor(message: string = "Bad Request") {
        super(message, StatusCodes.BAD_REQUEST);
    }   
}

export class NotFoundError extends AppError {
    constructor(message: string = "Not Found") {
        super(message, StatusCodes.NOT_FOUND);
    }   
}

export class InternalServerError extends AppError {
    constructor(message: string = "Internal Server Error") {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR);
    }   
}

export class ForbiddenError extends AppError {
    constructor(message: string = "Forbidden") {
        super(message, StatusCodes.FORBIDDEN);
    }   
}

export default {
    UnauthorizedError,
    BadRequestError,
    NotFoundError,
    InternalServerError,
    ForbiddenError
}