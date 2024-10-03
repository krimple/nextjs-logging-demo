import Logger from 'pino';
const rootLogger = Logger();
rootLogger.level = 'debug';
export {rootLogger};