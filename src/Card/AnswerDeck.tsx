import { Answer } from "../Model";
import Card from "./Card";
import { randomize } from "../App";
export type Props = {
  answers: Answer[];
  next: Function;
};
function AnswerDeck({ answers, next }: Props) {
  randomize(answers);
  return (
    <>
      {answers.map((e, i) => (
        <Card answer={answers[i]} next={next} />
      ))}
    </>
  );
}
export default AnswerDeck;
