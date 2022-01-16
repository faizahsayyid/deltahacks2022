import { useState, useContext } from "react";
import useAnalysis from "../hooks/useAnalysis";
import { GlobalContext } from "../contexts/GlobalContext";
import useSummary from "../hooks/useSummary";

const FullAnalysis = () => {
  //   const { sentimentAnalysis, topicsCovered } = useAnalysis();
  const [isSentiment, setIsSentiment] = useState(false);
  const [topics, setTopics] = useState(false);
  const { sentiment, topicsCovered, question, audioUrl } =
    useContext(GlobalContext);

  const { avgScore, topicSummary } = useSummary();

  const getTopic = (list) => {
    let result = "";
    list.forEach((el, index) => {
      if (index === 0) {
        result = el.label;
      } else {
        result += ", " + el.label;
      }
    });

    return result;
  };

  return (
    <div className="d-flex flex-column align-items-center vw-100">
      <h2 className="w-75 my-4">Full Analysis</h2>
      <h4 className="w-75 mb-4">
        <strong>Question:</strong> {question}
      </h4>
      <audio controls src={audioUrl} className="w-50 mb-4" />
      <div className="w-75 my-4">
        <div className="d-flex w-100">
          <h6 className="w-25 text-secondary">Average Confidence:</h6>
          <div className="text-success">{avgScore}%</div>
        </div>
        <div className="d-flex w-100">
          <h6 className="w-25 text-secondary">Topics You Covered: </h6>
          <div>{topicSummary}</div>
        </div>
      </div>
      <div className="accordion w-75 mb-4">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={
                isSentiment ? "accordion-button" : "accordion-button collapsed"
              }
              type="button"
              onClick={() => setIsSentiment(!isSentiment)}
            >
              Sentiment Analysis
            </button>
          </h2>
          <div
            className={
              isSentiment
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <ul className="list-item-group">
                {sentiment &&
                  sentiment.sentimentAnalysisResults.map((element, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        Confidence Score:{" "}
                        <span className="text-success">
                          {Math.round(element.confidence * 100)}%
                        </span>
                      </div>
                      <div className="text-secondary w-50">{element.text}</div>
                      <div>Timestamp: {element.start} secs</div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={
                topics ? "accordion-button" : "accordion-button collapsed"
              }
              type="button"
              onClick={() => setTopics(!topics)}
            >
              Topics Covered
            </button>
          </h2>
          <div
            className={
              topics
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <ul className="list-item-group">
                {topicsCovered &&
                  topicsCovered.topicAnalysisResults[0].results.map(
                    (element, index) => (
                      <li key={index} className="list-group-item">
                        <div className="mb-2">
                          Topics: {getTopic(element.labels)}
                        </div>
                        <div className="text-secondary mb-2">
                          <strong className="text-dark">Words Spoken:</strong>{" "}
                          {element.text}
                        </div>
                        <div className="">Timestamp: 1:10</div>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullAnalysis;
