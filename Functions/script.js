"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = +prompt(
      `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
    );
    this.answers[answer] = ++this.answers[answer];
  },
  displayResults() {},
};
const pollFn = poll.registerNewAnswer.bind(poll);
document.querySelector(".poll").addEventListener(`click`, pollFn);
