import React from "react";
import useQuestions from "../../hooks/useQuestions";
import Question from "./Question";

const QuestionsSideBar = () => {
  const questions = useQuestions();

  return (
    <div class="col-4 overflow-auto" style={{ height: "90vh" }}>
      {questions.map((q, index) => {
        return <Question question={q} number={index + 1} key={index} />;
      })}
    </div>
  );
};

export default QuestionsSideBar;
