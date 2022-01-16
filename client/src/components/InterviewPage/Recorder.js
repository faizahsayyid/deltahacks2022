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

  const {
    username,
    isAnalysisLoading,
    setIsAnalysisLoading,
    setSentiment,
    setTopics,
    setQuestion,
    setAudioUrl,
  } = useContext(GlobalContext);

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
      url: "https://deltahacks2022.herokuapp.com/api/audio/upload",

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
    setIsAnalysisLoading(true);
    var data = JSON.stringify({
      username: username === "" ? "demo" : username,
      audio_url: url,
      questionId,
    });

    var config = {
      method: "post",
      url: "https://deltahacks2022.herokuapp.com/api/analyze/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setSentiment(response.data.savedSentiment);
        setTopics(response.data.savedTopic);
        setIsAnalysisLoading(false);
        setQuestion(questions[questionId]);
        setAudioUrl(audioURL);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="d-inline-flex">
      <button
        className={
          isRecording
            ? "btn btn-danger btn-sm btn-outline-danger"
            : "btn btn-sm btn-danger"
        }
        disabled={isRecording || isAnalysisLoading}
        onClick={startRecording}
      >
        {isRecording ? "Recording in progress..." : "Record"}
      </button>

      {isRecording && (
        <button
          className="btn btn-danger ms-1"
          onClick={stopRecording}
          disabled={isAnalysisLoading}
        >
          <BsFillStopFill />
        </button>
      )}
      {audioURL &&
        (isAnalysisLoading ? (
          <div className="spinner-border ms-2" role="status"></div>
        ) : (
          <button
            className="btn btn-success btn-sm ms-2"
            onClick={async () => {
              uploadAudio();
            }}
            disabled={isAnalysisLoading}
          >
            Submit
            <BsCheckLg />
          </button>
        ))}

      <audio src={audioURL} className="ms-2 " controls />
    </div>
  );
};

export default Recorder;
