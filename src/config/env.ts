import { config } from "dotenv";
import path from "path";
import { cwd } from "process";

config({'path': path.resolve(cwd(), '.env')});

const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || "mongodb+srv://nikhil:nikhil@sharely.afghe6j.mongodb.net/nikai?appName=Sharely",
    SESSION_SECRET: process.env.SESSION_SECRET || "secret",
};

export default ENV;