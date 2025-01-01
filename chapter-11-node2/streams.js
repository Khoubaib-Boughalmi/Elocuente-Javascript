const { createReadStream, createWriteStream } = require("fs");

(() => {
  try {
    const readStream = createReadStream("./readText.txt");
    const writeStream = createWriteStream("./outStream.txt");

    readStream.on("data", (chunk) => {
      if (!writeStream.write(chunk)) {
        readStream.pause();
        writeStream.once("drain", () => {
          readStream.resume();
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
})();

// All of the previous is equivalant to:

// readStream.pipe(writeStream);

/**
 *  - createReadStream("source.txt") reads the file in chunks.
    - createWriteStream("destination.txt") writes the chunks to a new file.
    - .pipe() connects the two streams, transferring data from the source to the destination
 */
