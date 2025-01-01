const fs = require("fs/promises");

const readLongFileAbort = new AbortController();
const signal = readLongFileAbort.signal;

(async () => {
  try {
    const file = await fs.readFile("./longFIle.txt", {
      encoding: "utf-8",
      signal,
    });
    console.log(file);
  } catch (error) {
    if (error.code === "ABORT_ERR") {
      console.log("Aborted reading file");
    } else {
      console.log("Error occurred: ", error);
    }
  }
})();

setTimeout(() => {
  readLongFileAbort.abort();
}, 200);
