import { useState } from "react";
import useFullAnalysis from "../hooks/useFullAnalysis";

const FullAnalysis = () => {
  const { sentimentAnalysis, topicsCovered } = useFullAnalysis();
  const [sentiment, setSentiment] = useState(false);
  const [topics, setTopics] = useState(false);

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
        <strong>Question:</strong> Tell me about yourself.
      </h4>
      <audio controls className="w-50 mb-4" />
      <div className="w-75 my-4">
        <div className="d-flex w-100">
          <h6 className="w-25 text-secondary">Average Confidence:</h6>
          <div className="text-success">20%</div>
        </div>
        <div className="d-flex w-100">
          <h6 className="w-25 text-secondary">Topics You Covered: </h6>
          <div>
            Environment: {0.865 * 100}%, Industries:
            {1.0 * 100}%, Politics: {0.165 * 100}%, Technology
            {"&"}
            Computing: {0.15 * 100}%
          </div>
        </div>
      </div>
      <div className="accordion w-75 mb-4">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={
                sentiment ? "accordion-button" : "accordion-button collapsed"
              }
              type="button"
              onClick={() => setSentiment(!sentiment)}
            >
              Sentiment Analysis
            </button>
          </h2>
          <div
            className={
              sentiment
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              <ul className="list-item-group">
                {sentimentAnalysis.map((element, index) => (
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
                    <div>Timestamp: 1:10</div>
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
                {topicsCovered.map((element, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="w-50">
                      Topics: {getTopic(element.labels)}
                    </div>
                    <div className="text-secondary w-25">{element.text}</div>
                    <div className="w-25">Timestamp: 1:10</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullAnalysis;
