import React from "react";
import QuestionsSideBar from "./QuestionsSideBar";
import Interview from "./Interview";
import useQuestions from "../../hooks/useQuestions";

const InterviewPage = () => {
  const { questions, questionId } = useQuestions();
  return (
    <div className="row vw-100">
      <QuestionsSideBar questions={questions} questionId={questionId} />
      <Interview question={questions[parseInt(questionId)]} />
    </div>
  );
};

export default InterviewPage;
