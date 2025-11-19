import app from "./app.js";
import ENV from "./config/env.js";

const PORT = ENV.port || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on("error", (err: Error) => {
    console.error("Failed to start server:", err);
});