import { Answer } from "../Model";
import Card from "./Card";

export type Props = {
  answers: Answer[];
  next: Function;
};
function AnswerDeck({ answers, next }: Props) {
  return (
    <>
      <Card next={next} answer={answers[0]} />
      <Card next={next} answer={answers[1]} />
      <Card next={next} answer={answers[2]} />
      <Card next={next} answer={answers[3]} />
    </>
  );
}
export default AnswerDeck;
