import { useState } from "react";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import Recorder from "./Recorder";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

const Interview = ({ question }) => {
  const [video, setVideo] = useState(false);

  return (
    <div className="col-8">
      <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
        <h3 className="my-4">{question}</h3>
        {video ? (
          <div className="h-50">
            <Webcam
              audio={false}
              videoConstraints={{
                width: 600,
                height: 320,
                facingMode: "user",
              }}
              mirrored={true}
            />
          </div>
        ) : (
          <div className="bg-secondary h-50 w-75"></div>
        )}
        <div className="mt-2">
          <button
            className="btn btn-primary m-2"
            onClick={() => setVideo(!video)}
          >
            {video ? <BsFillCameraVideoFill /> : <BsFillCameraVideoOffFill />}
          </button>
          <Recorder />
        </div>
        <div className="w-100 mt-2 mx-4">
          <div className="d-flex justify-content-between mb-3 border-top pt-3">
            <h4>Analysis:</h4>{" "}
            <Link className="btn btn-outline-info" to={`/analysis/${1}`}>
              See Full Analysis
            </Link>
          </div>
          <div>
            <div className="d-flex">
              <h6 className="w-25 text-secondary">Average Confidence:</h6>
              <span className="text-success">20%</span>
            </div>
            <div className="d-flex">
              <h6 className="w-25 text-secondary">Topics You Covered: </h6>
              <span>
                Environment: {0.865 * 100}%, Industries:
                {1.0 * 100}%, Politics: {0.165 * 100}%, Technology
                {"&"}
                Computing: {0.15 * 100}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
