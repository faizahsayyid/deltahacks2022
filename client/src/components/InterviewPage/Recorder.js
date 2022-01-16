import { useState, useContext } from "react";
import useRecorder from "../../hooks/useRecorder";
import { BsFillStopFill, BsCheckLg } from "react-icons/bs";
import axios from "axios";
import FormData from "form-data";
import { GlobalContext } from "../../contexts/GlobalContext";
import useQuestions from "../../hooks/useQuestions";

const Recorder = () => {
  let [audioURL, isRecording, startRecording, stopRecording, blob] =
    useRecorder();
  const [isLoading, setIsLoading] = useState(false);

  const { questions, questionId } = useQuestions();

  const { username } = useContext(GlobalContext);

  async function uploadAudio() {
    var file = new File([blob], "mediaFile", {
      type: "audio/mpeg",
    });

    var data = new FormData();
    data.append("audio_file", file);
    data.append("username", username === "" ? "demo" : username);
    data.append("questionId", questionId);
    var config = {
      method: "post",
      url: "http://localhost:8080/api/audio/upload",

      data: data,
    };

    const response = await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    await getAnalysis(response.data.url);
  }
  async function getAnalysis(url) {
    setIsLoading(true);
    var data = JSON.stringify({
      username: username === "" ? "demo" : username,
      audio_url: url,
      questionId,
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/api/analyze/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <span>
      <button
        className={
          isRecording ? "btn btn-danger btn-outline-danger" : "btn btn-danger"
        }
        disabled={isRecording || isLoading}
        onClick={startRecording}
      >
        {isRecording ? "Recording in progress..." : "Record"}
      </button>

      {isRecording && (
        <button
          className="btn btn-danger ms-1"
          onClick={stopRecording}
          disabled={isLoading}
        >
          <BsFillStopFill />
        </button>
      )}
      {audioURL &&
        (isLoading ? (
          <div className="spinner-border ms-2" role="status"></div>
        ) : (
          <button
            className="btn btn-success ms-1"
            onClick={async () => {
              uploadAudio();
            }}
            disabled={isLoading}
          >
            Submit
            <BsCheckLg />
          </button>
        ))}

      <audio src={audioURL} controls />
    </span>
  );
};

export default Recorder;
