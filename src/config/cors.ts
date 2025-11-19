import cors, { CorsOptions } from "cors";
import { ForbiddenError } from "../core/errors/ErrorHandlers";

const whiteList = [
    "http://localhost:3000",
    "http://localhost:4200"
];


const corsOptions: CorsOptions = {
    origin: (origin: any, callback: Function) => {
        if(!origin) {
            return callback(null, true);
        }

        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }

        return callback(new ForbiddenError("CORS policy does not allow access from the specified origin."), false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Length", "X-Request-Id"],
    maxAge: 600, // 10 minutes
}


export const corsMiddleware = cors(corsOptions);