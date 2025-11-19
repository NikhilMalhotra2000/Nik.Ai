import { config } from "dotenv";
import path from "path";
import { cwd } from "process";

config({'path': path.resolve(cwd(), '.env')});

const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 3000
};

export default ENV;