import { useState } from "react";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import Recorder from "./Recorder";
import Webcam from "react-webcam";

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
        <div className="w-100 mt-4 mx-4">
          <h4>Full Analysis:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            in repellendus cumque accusamus. Sint sit temporibus, odio esse amet
            ex nesciunt! Totam, ad. Ullam, aliquam? Non enim quae et corrupti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interview;
