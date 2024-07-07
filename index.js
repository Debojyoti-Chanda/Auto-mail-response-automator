import express from 'express';
import './src/taskScheduler.mjs';
import './src/emailWorker.mjs';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 7069;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});