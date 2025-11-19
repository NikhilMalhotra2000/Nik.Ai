import winston from "winston";


const format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`;
    })
);

const logger = winston.createLogger({
    level: "info",
    format,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", 'dirname': 'logs', level: "error" }),
        new winston.transports.File({filename: "app.log", 'dirname': 'logs' }),
    ],
    exitOnError: false,
});

export default logger;