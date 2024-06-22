import React, { CSSProperties, StyleHTMLAttributes, useState } from "react";
import Card from "./Card";
const getImg = (n: number) => {
  return `cat${n}.jpg`;
};
//Good
const swapElements = (input: number[], begin: number, end: number) => {
  let temp = input[end];
  input[end] = input[begin];
  input[begin] = temp;
  return input;
};

const ContainerStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};
const BoxStyle: CSSProperties = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  width: "400px",
  border: "1px solid black",
  paddingTop: "10px",
  paddingBottom: "10px",
};

function App() {
  const [imgs, setImgs] = useState<number[]>([3, 2, 1]);
  const randomizeArray = (input: number[]) => {
    let n = input.length;
    for (var i = 0; i < n; i++) {
      let seed = Math.random();
      seed = seed !== 1 ? seed : 0;
      swapElements(input, i, Math.floor(seed * n));
    }
    setImgs(new Array(...input));
  };
  const select = () => {
    randomizeArray(imgs);
  };
  return (
    <div className="App">
      <div style={ContainerStyle} className="container">
        <div style={BoxStyle}>
          <Card select={select} img={getImg(imgs[0])} />
          <Card select={select} img={getImg(imgs[1])} />
          <Card select={select} img={getImg(imgs[2])} />
        </div>
      </div>
    </div>
  );
}

export default App;
