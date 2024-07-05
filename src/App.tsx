import React, { CSSProperties, StyleHTMLAttributes } from "react";
import Card from "./Card";

const getImg = (n: number) => {
  return `cat${n}.jpg`;
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

const select = () => {
  alert("foo");
};
function App() {
  return (
    <div className="App">
      <div style={ContainerStyle} className="container">
        <div style={BoxStyle}>
          <Card select={select} img={getImg(1)}></Card>
          <Card select={select} img={getImg(2)} />
          <Card select={select} img={getImg(3)} />
        </div>
      </div>
    </div>
  );
}

export default App;
