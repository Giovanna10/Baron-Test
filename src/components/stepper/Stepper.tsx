import { FC, useState } from "react";
import { questions } from "../../api/questionsData";
import { Question } from "../question/Question";

export const Stepper: FC = () => {
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleMoveOn = (isCorrectAnswer?: boolean) => () => {
    if (isCorrectAnswer) {
      setCorrectAnswersCounter(correctAnswersCounter + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      {questions.map((question, index) =>
        index === currentQuestion ? (
          <Question
            id={question.id}
            answers={question.answers}
            moveOn={handleMoveOn}
          />
        ) : null
      )}
      {currentQuestion === questions.length ? (
        <p>You answered {correctAnswersCounter} questions correctly</p>
      ) : null}
    </>
  );
};
