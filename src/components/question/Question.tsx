import { FC } from "react";
import { QuestionType } from "../../types/question";
import { Answer } from "../answer/Answer";
import { Image } from "../Image";
import "./question.css";

interface QuestionProps extends QuestionType {
  moveOn: () => () => void;
}

export const Question: FC<QuestionProps> = ({ id, answers, moveOn }) => {
  return (
    <div className="question-container">
      <Image key={id} id={id} />
      <div className="answer-container">
        {answers.map((a) => (
          <Answer answer={a.answer} isCorrect={a.isCorrect} moveOn={moveOn} />
        ))}
      </div>
    </div>
  );
};
