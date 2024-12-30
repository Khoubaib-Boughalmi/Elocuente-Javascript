const asyncFunc = async () => {
  setTimeout(() => {
    console.log("hello world");
  }, 0);
};

const callingAsyncFunc = async () => {
  try {
    await asyncFunc();
  } catch (error) {}
};

// callingAsyncFunc();
// Promise.resolve("testPromise")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// console.log("hey there");

const handlesomeAsyncFunction = (cb) => {
  setTimeout(() => {
    const rand = Math.floor(Math.random() * 10);
    if (rand % 2 == 0) {
      cb(null, "even");
    } else {
      cb("odd", null);
    }
  }, 1000);
};

const processValue = (value) => {
  console.log(value);
};

const handleError = (value) => {
  console.log(value);
};

const someAsyncFunction = (error, value) => {
  if (error) handleError(error);
  else processValue(value);
};

handlesomeAsyncFunction(someAsyncFunction);

const raiseException = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("woosh77");
      throw new Error("Woosh");
    }, 20);
  });
};

async () => {
  try {
    await raiseException();
  } catch (e) {
    // This will not run
    console.log("Caught", e);
  }
};
