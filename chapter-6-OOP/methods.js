function speak(phrase) {
  console.log(`The ${this.type} rabbit is a ${phrase}`);
}

const blueRabbit = {
  speak,
  type: "blue",
};

blueRabbit.speak("magical rabbit");
speak.call(blueRabbit, "magical rabbit");

// alternatively we can create speak inside of the obj
const whiteRabbit = {
  play: function (toy) {
    console.log(`The ${this.type} rabbit plays with ${toy}`);
  },
  speak(phrase) {
    console.log(`The ${this.type} rabbit says ${phrase}`);
  },
  type: "White",
};

whiteRabbit.speak("OOP is fun");
whiteRabbit.play("mud");

const greenRabbit = {
  type: "green",
  speak: (phrase) => {
    console.log(`The ${this.type} is a ${phrase}`); // this is not `greenRabbit`
  },
};

greenRabbit.speak("magical rabbit"); // The undefined is a magical rabbit

/**
  Key Takeaways:

    Arrow Functions:
        Use them when you want this to remain consistent with the surrounding lexical scope (e.g., in callbacks or nested functions).
        They are unsuitable for methods or when you need dynamic this. (do not use with methods)

    Functions with function Keyword:
        Use them when you need dynamic this behavior (e.g., methods or when using call, apply, or bind).
*/
