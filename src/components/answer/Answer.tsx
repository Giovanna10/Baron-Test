import { FC } from "react";
import { AnswerType } from "../../types/answer";
import "./answer.css";

interface AnswerProps extends AnswerType {
  moveOn: (isCorrect: boolean) => () => void;
}

export const Answer: FC<AnswerProps> = ({ answer, isCorrect, moveOn }) => {
  return (
    <div className="box" onClick={moveOn(isCorrect)}>
      <p className="text">{answer}</p>
    </div>
  );
};
