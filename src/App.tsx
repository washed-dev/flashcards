import React, { CSSProperties, StyleHTMLAttributes, useState } from "react";
import Card from "./Card/Card";
import "./App.css";
interface CardType {
  prompt: string;
  options: string[];
  answer: string;
}
function App() {
  let hablar = {
    prompt: "hablar",
    options: ["to speak", "to run", "to eat", "to sleep"],
    answer: "to speak",
  };
  const [card, setCard] = useState<CardType>(hablar);

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
  function select(): void {
    randomize(card.options);
    setCard((prevState) => {
      return { ...card, options: card.options };
    });
  }
  return (
    <div className="App">
      <div className="container">
        <div id="question-container">
          <Card select={select} text={card.prompt} />
        </div>
        <div id="answer-container">
          <Card select={select} text={card.options[0]} />
          <Card select={select} text={card.options[1]} />
          <Card select={select} text={card.options[2]} />
          <Card select={select} text={card.options[3]} />
        </div>
      </div>
    </div>
  );
}

export default App;
