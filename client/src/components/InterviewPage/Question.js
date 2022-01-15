import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Question = ({ question, number, isActive, questionId }) => {
  const [classes, setClasses] = useState(
    "list-group-item p-4 list-group-item-secondary"
  );

  useEffect(() => {
    setClasses(
      isActive
        ? "list-group-item p-4 list-group-item-action list-group-item-info"
        : "list-group-item p-4 list-group-item-action list-group-item-secondary"
    );
  }, [isActive]);

  return (
    <Link className={classes} to={`/interview/${questionId}`}>
      {number}. {question}
    </Link>
  );
};

export default Question;
