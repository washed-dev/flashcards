import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import { Flashcard, Deck } from "./Model";
import AnswerDeck from "./Card/AnswerDeck";
const swapElements = (input: Object[], begin: number, end: number) => {
  let temp = input[end];
  input[end] = input[begin];
  input[begin] = temp;
  return input;
};
export function randomize(input: Object[]) {
  console.dir(input);
  let n = input.length;
  for (var i = 0; i < n; i++) {
    let seed = Math.random();
    swapElements(input, i, Math.floor(seed * n));
  }
}
function App() {
  const [deck, setDeck] = useState<Deck>(data[0]);

  function next(): void {
    setDeck((prevState): Deck => {
      let newDiscard = [...prevState.discard, prevState.draw[0]];
      let newDraw = prevState.draw.slice(1);
      if (newDraw.length === 0) randomize(newDiscard);
      return newDraw.length > 0
        ? { ...prevState, discard: newDiscard, draw: newDraw }
        : { ...prevState, discard: newDraw, draw: newDiscard };
    });
    //if isCorrect
    //nextCard
    //else highlight
  }
  return (
    <div className="App">
      <div className="container">
        <div id="question-container">
          <div className="card">
            <p>{deck.draw[0].question}</p>
          </div>
        </div>
        <div id="answer-container">
          <AnswerDeck next={next} answers={deck.draw[0].answers} />
        </div>
      </div>
    </div>
  );
}

export default App;
