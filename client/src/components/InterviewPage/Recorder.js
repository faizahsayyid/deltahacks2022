import { useEffect } from "react";
import useRecorder from "../../hooks/useRecorder";
import { BsFillStopFill } from "react-icons/bs";

const Recorder = () => {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  return (
    <span>
      <button
        className={
          isRecording ? "btn btn-danger btn-outline-danger" : "btn btn-danger"
        }
        disabled={isRecording}
        onClick={startRecording}
      >
        {isRecording ? "Recording in progress..." : "Record"}
      </button>

      {isRecording && (
        <button className="btn btn-danger ms-1" onClick={stopRecording}>
          <BsFillStopFill />
        </button>
      )}
      {/* <audio src={audioURL} controls /> */}
    </span>
  );
};

export default Recorder;
