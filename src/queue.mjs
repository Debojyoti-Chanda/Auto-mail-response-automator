// src/queue.ts
import { Queue } from 'bullmq';
import { REDIS_CONFIG } from './configRedis.mjs';
import IORedis from 'ioredis';

const connection = new IORedis(REDIS_CONFIG);

export const emailQueue = new Queue('emailQueue', { connection });
