// src/config.ts
import dotenv from 'dotenv';

dotenv.config();

export const REDIS_CONFIG = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
};

export const EMAIL_CHECK_INTERVAL = 3600000; // 1 hr in milliseconds

export const EMAIL_ENDPOINT = 'http://localhost:8080/emails';
