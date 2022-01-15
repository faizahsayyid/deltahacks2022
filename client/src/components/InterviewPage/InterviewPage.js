import React from "react";
import QuestionsSideBar from "./QuestionsSideBar";
import Interview from "./Interview";

const InterviewPage = () => {
  return (
    <div className="row">
      <QuestionsSideBar />
      <Interview />
    </div>
  );
};

export default InterviewPage;
