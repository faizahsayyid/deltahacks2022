import React from "react";
import { Link } from "react-router-dom";

const Recordings = () => {
  const recordings = [
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
  ];

  return (
    <div className="vw-100 d-flex flex-column align-items-center">
      <h2 className="my-4">Past Recordings</h2>
      {recordings.map((q, index) => {
        return (
          <div className="card w-75 my-2" key={index}>
            <div className="card-body d-flex justify-content-evenly align-items-center">
              <div>
                <div className="text-secondary text-sm-center">Score</div>
                <div className="text-success">20%</div>
              </div>
              <div className="">01/14/2022</div>
              <div className="w-25">{q}</div>
              <audio controls />
              <Link className="btn btn-info" to={`/analysis/${index}`}>
                Full Analysis
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recordings;
