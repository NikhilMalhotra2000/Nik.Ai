import mongoose from "mongoose";
import ENV from "./env";
import logger from "./logger";

const mongoUri = ENV.MONGO_URI;

export const connectDB = async () => {
    try {
        logger.info("Connecting to MongoDB...");
        await mongoose.connect(mongoUri, {
            family: 4
        }).then(() => {
            logger.info("Connected to MongoDB");
        }).catch((error) => {
            logger.error("Error connecting to MongoDB:", error);
            process.exit(1);
        });
    } catch (error) {
        logger.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};