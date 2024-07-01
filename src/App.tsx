import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import { Flashcard, Deck } from "./Model";
import AnswerDeck from "./Card/AnswerDeck";
import { Link, useParams } from "react-router-dom";
const swapElements = (input: Object[], begin: number, end: number) => {
  let temp = input[end];
  input[end] = input[begin];
  input[begin] = temp;
  return input;
};
type Params = {
  deckId: number;
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
  let deckId = useParams().deckId;
  if (deckId === undefined) deckId = "0";
  let deckNum: number = Number.parseInt(deckId);
  const [deck, setDeck] = useState<Deck>(data[deckNum]);
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
        <Link to="/dashboard">
          <button id="dashboard-btn">dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
