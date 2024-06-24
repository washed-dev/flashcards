import { MouseEventHandler } from "react";
import "./Card.css";
type Props = {
  text: string;
  select: MouseEventHandler;
};
function Card({ text, select }: Props) {
  return (
    <div onClick={select} className="card">
      <p>{text}</p>
    </div>
  );
}
export default Card;
