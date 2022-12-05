"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.databaseConfig = {
    development: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5433',
        dialect: process.env.DB_DIALECT || 'postgres',
    },
    test: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME_TEST,
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5433',
        dialect: process.env.DB_DIALECT || 'postgres',
    },
    production: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME_PRODUCTION,
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5433',
        dialect: process.env.DB_DIALECT || 'postgres',
    },
};
//# sourceMappingURL=database.config.js.map