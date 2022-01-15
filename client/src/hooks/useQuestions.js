import { useEffect, useState } from "react";

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions([
      "Tell Me About Yourself",
      "What is your greatest strength?",
      "What is your greatest weakness?",
      "Tell me about a time you overcame adversity.",
      "Why should we hire you?",
      "What do you want to work for us?",
      "What is your greatest accomplishment?",
      "What kind of working environment do you work best in?",
      "Where do you see yourself in 5 years?",
      "How do you deal with pressure or stressful situation?",
      "Give an example of when you showed leadership qualities",
      "How did you hear about this position?",
    ]);
  }, []);

  return questions;
};

export default useQuestions;
