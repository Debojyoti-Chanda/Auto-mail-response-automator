// taskScheduler.mjs
import { emailQueue } from "./queue.mjs";
import { EMAIL_CHECK_INTERVAL } from "./configRedis.mjs";
import axios from "axios";

async function checkForEmails() {
  try {
    const { data } = await axios.get("http://localhost:8080/emails", {
      headers: {
        Cookie: `connect.sid=s%3ASwFjENu34O0aLSdsXCW-ID6ZdXnYNjg9.MvYuHuI9h7lNupex9vhXsWMHyG%2BFkh9i2W%2B0XUmoMew`,
      },
    });
    await emailQueue.add("checkEmails", data);
    console.log("Emails added to the queue");
  } catch (error) {
    console.error("Failed to fetch emails:", error.message);
  }
}

setInterval(checkForEmails, EMAIL_CHECK_INTERVAL);
