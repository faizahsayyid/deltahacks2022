import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const useSummary = () => {
  const { sentiment, topicsCovered } = useContext(GlobalContext);
  const [avgScore, setAvgScore] = useState();
  const [topicSummary, setTopicSummary] = useState();

  useEffect(() => {
    if (sentiment) {
      const data = sentiment.sentimentAnalysisResults.map(
        (el) => el.confidence
      );
      setAvgScore(
        Math.round(
          (data.reduce((total, curr) => total + curr, 0) / data.length) * 100
        )
      );
    }
  }, [sentiment]);

  useEffect(() => {
    if (topicsCovered) {
      console.log(topicsCovered.topicAnalysisResults[0].summary);
      let result = "";
      let count = 0;
      for (const key in topicsCovered.topicAnalysisResults[0].summary) {
        if (count < 2) {
          result += key + ", ";
        }
        count++;
      }
      setTopicSummary(result);
    }
  }, [topicsCovered]);

  return { avgScore, topicSummary };
};

export default useSummary;
