import session from "express-session";
import { Express } from "express";
import ENV from "./env";
import MongoStore from "connect-mongo";
import logger from "./logger";

declare module 'express-session' {
    interface SessionData {
        metaData: {
            [key: string]: any
        }
    }
}

export async function initSession(app: Express) {
    try {
        logger.info("Initializing session...");
        const isProd = ENV.NODE_ENV === "production";
        const secret = ENV.SESSION_SECRET;
        app.set("trust proxy", 1);

        app.use(session({
            name: "sid",
            secret: secret!,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: isProd,
                sameSite: isProd ? "none" : "lax",
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 // 1 day
            },
            store: MongoStore.create({
                mongoUrl: ENV.MONGO_URI,
                ttl: 24 * 60 * 60,
                autoRemove: "disabled",
                stringify: false
            }).on("create", (data)=> {
                logger.info("Session created, " + data);
            })
        }));
        logger.info("Session initialized");
    }
    catch (error) {
        logger.error("Error initializing session:", error);
    }
}