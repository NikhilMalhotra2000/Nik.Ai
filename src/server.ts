import app from "./app.js";
import { connectDB } from "./config/db.js";
import ENV from "./config/env.js";
import logger from "./config/logger.js";
import { initSession } from "./config/session.js";

const PORT = ENV.PORT || 3000;

await connectDB();

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
}).on("error", (err: Error) => {
    logger.error("Failed to start server:", err);
});