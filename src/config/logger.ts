import winston from "winston";


const format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, stack, meta }) => {
        // Check if message is an object and stringify it
        const logMessage = typeof message === 'object' ? JSON.stringify(message) : message;

        // Optionally handle metadata (second argument passed to the logger)
        const logMeta = meta && Object.keys(meta).length > 0 ? ` | metadata: ${JSON.stringify(meta)}` : '';

        return `${timestamp} ${level}: ${logMessage}${logMeta}${stack ? ` | stack: ${stack}` : ''}`;
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