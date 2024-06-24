import React, { CSSProperties, StyleHTMLAttributes, useState } from "react";
import Card from "./Card/Card";
import "./App.css";
import { Answer, Flashcard } from "./Model";
import AnswerDeck from "./Card/AnswerDeck";
function App() {
  let dar: Flashcard = {
    question: "dar",
    answers: [
      { text: "to speak", isCorrect: false },
      { text: "to give", isCorrect: true },
      { text: "to run", isCorrect: false },
      { text: "to eat", isCorrect: false },
    ],
  };
  let hablar: Flashcard = {
    question: "hablar",
    answers: [
      { text: "to speak", isCorrect: true },
      { text: "to run", isCorrect: false },
      { text: "to eat", isCorrect: false },
      { text: "to sleep", isCorrect: false },
    ],
  };
  const [card, setCard] = useState<Flashcard>(hablar);

  const swapElements = (input: Object[], begin: number, end: number) => {
    let temp = input[end];
    input[end] = input[begin];
    input[begin] = temp;
    return input;
  };

  function randomize(input: Object[]) {
    console.dir(input);
    let n = input.length;
    for (var i = 0; i < n; i++) {
      let seed = Math.random();
      seed = seed !== 1 ? seed : 0;
      swapElements(input, i, Math.floor(seed * n));
    }
  }
  function next(): void {
    console.dir([card, dar, hablar]);
    if (card.question == dar.question) setCard(hablar);
    if (card.question == hablar.question) setCard(dar);
    //if isCorrect
    //nextCard
    //else highlight
  }
  return (
    <div className="App">
      <div className="container">
        <div id="question-container">
          <div className="card">
            <p>{card.question}</p>
          </div>
        </div>
        <div id="answer-container">
          <AnswerDeck next={next} answers={card.answers} />
        </div>
      </div>
    </div>
  );
}

export default App;
