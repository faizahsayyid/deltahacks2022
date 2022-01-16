import { useEffect, useState } from "react";

const useFullAnalysis = () => {
  const [sentimentAnalysis, setSentimentAnalysis] = useState([]);
  const [topicsCovered, setTopicsCovered] = useState([]);

  useEffect(() => {
    setSentimentAnalysis([
      {
        text: "Speaking of being in a shadow, didn't you feel yourself in the shadow of those Hollywood A-listers?",
        start: 106090,
        end: 112806,
        sentiment: "NEUTRAL",
        confidence: 0.5466495752334595,
        speaker: null,
      },
      {
        text: "It's my privilege to work with these actors.",
        start: 114790,
        end: 116994,
        sentiment: "POSITIVE",
        confidence: 0.9224883317947388,
        speaker: null,
      },
    ]);
    setTopicsCovered([
      {
        text: "Last year, I showed these two slides that...",
        labels: [
          {
            relevance: 1.0,
            label: "Science>Environment",
          },
        ],
        timestamp: {
          start: 12350,
          end: 164740,
        },
      },
      {
        text: "In the Andy's, this glacier is the source...",
        labels: [
          {
            relevance: 1.0,
            label: "BusinessAndFinance>Industries",
          },
          {
            relevance: 0.33,
            label: "NewsAndPolitics>Politics",
          },
          {
            relevance: 0.33,
            label: "Science>Environment",
          },
        ],
        timestamp: {
          start: 164950,
          end: 319890,
        },
      },
    ]);
  }, []);
  return { sentimentAnalysis, topicsCovered };
};

export default useFullAnalysis;
