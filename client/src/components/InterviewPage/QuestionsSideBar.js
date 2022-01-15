import Question from "./Question";

const QuestionsSideBar = ({ questions, questionId }) => {
  return (
    <div className="col-4 overflow-auto" style={{ height: "90vh" }}>
      <ul className="list-group">
        {questions.map((q, index) => {
          return (
            <Question
              question={q}
              number={index + 1}
              key={index}
              isActive={index === parseInt(questionId)}
              questionId={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionsSideBar;
