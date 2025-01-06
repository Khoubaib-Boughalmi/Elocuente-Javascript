const fs = require("fs/promises");


// FUNCTION EXPRESSION

const abortController = new AbortController();
const signal = abortController.signal;


(async () => {
    try {
        const file = await fs.readFile("input.txt", { encoding: "utf-8", signal });
        console.log(file);
    } catch (error) {
        if (error.code === "ABORT_ERR") console.log("Process aborted");
        else console.log("Error occurred:", error);
    }
})();

setTimeout(() => {
    abortController.abort();
}, 10);