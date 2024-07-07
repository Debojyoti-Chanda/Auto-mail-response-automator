// src/workers/emailWorker.ts
import { Worker } from "bullmq";
import { emailQueue } from "./queue.mjs";
import axios from "axios";

const emailWorker = new Worker(
  "emailQueue",
  async (job) => {
      try {
        //   console.log(job);
        //   console.log(job.data);
      const response = await axios.post(
        "http://localhost:8080/generate-responses",
        job.data,
        {
          headers: {
            Cookie: `connect.sid=s%3AedmMQmaQjdnnuf-qRaZw_MEMmpnG9XHu.Itu6agUioHdKWygEwnacSe38qhrJJnm%2FDwevhz0NXhk`,
          },
        }
      );
      console.log("Response sent:");
    } catch (error) {
      console.error("Failed to send response:", error.message);
      throw error;
    }
  },
  {
    connection: emailQueue.client,
  }
);

emailWorker.on("completed", (job) => {
  console.log(`Job ${job.id} completed successfully`);
});

emailWorker.on("failed", (job, err) => {
  console.log(`Job ${job.id} failed with error ${err.message}`);
});
