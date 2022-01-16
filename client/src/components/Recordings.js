import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";
import useQuestions from "../hooks/useQuestions";

const Recordings = () => {
  const { username } = useContext(GlobalContext);
  const [recordings, setRecordings] = useState([]);
  const { questions, questionId } = useQuestions();

  const getPastRecordings = async () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://deltahacks2022.herokuapp.com/api/audio/get?username=${
        username === "" ? "demo" : username
      }`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var result = response.data.files.map((resData) => {
          return {
            score: 20,
            date: new Date(resData.date).toLocaleDateString("en-US"),
            file: `https://deltahacks2022.herokuapp.com/audio/${resData.filename}`,
            qID: resData.questionId,
          };
        });
        console.log(result);
        setRecordings(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getPastRecordings();
  }, []);
  return (
    <div className="vw-100 d-flex flex-column align-items-center">
      <h2 className="my-4">Past Recordings</h2>
      {recordings.map((data, index) => {
        return (
          <div className="card w-75 my-2" key={index}>
            <div className="card-body d-flex justify-content-evenly align-items-center">
              <div>
                <div className="text-secondary text-sm-center">Score</div>
                <div className="text-success">20%</div>
              </div>
              <div className="">{data.date}</div>
              <div className="w-25">{questions[data.qID]}</div>
              <audio src={data.file} controls />
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
