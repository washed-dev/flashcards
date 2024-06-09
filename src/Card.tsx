import { MouseEventHandler } from "react";

type Props = {
  img: string;
  select: MouseEventHandler;
};
function Card({ img, select }: Props) {
  const CardStyle = {
    backgroundImage: `url(images/${img}`,
    height: "100px",
    width: "100px",
    backgroundSize: "100px",
    margin: "auto",
  };
  return <div onClick={select} style={CardStyle} className="card"></div>;
}
export default Card;
