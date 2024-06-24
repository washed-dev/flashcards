import { useState, MouseEventHandler, useEffect } from "react";
import "./Card.css";
import { Answer } from "../Model";
type Props = {
  answer: Answer;
  next: Function;
};
function Card({ answer, next }: Props) {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(false);
  }, [answer]);
  function selectHandler(): void {
    if (answer.isCorrect) next();
    else setSelected(true);
  }
  return (
    <div
      onClick={selectHandler}
      className={"card" + (selected ? " incorrect" : "")}
    >
      <p>{answer.text}</p>
    </div>
  );
}
export default Card;
