import React from "react";

const Question = ({ question, number }) => {
  return (
    <div className="card">
      <div className="card-body">
        {number}. {question}
      </div>
    </div>
  );
};

export default Question;
