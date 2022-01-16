import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillFileBarGraphFill,
  BsFillCollectionPlayFill,
} from "react-icons/bs";
import { FaRobot } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vw-100"
      style={{ height: "90vh" }}
    >
      <h1 className="text-success mb-4">Interviewy</h1>
      <div className="d-flex my-4">
        <div className="card mx-4">
          <div className="card-body d-flex align-items-center justify-content-center flex-column">
            <h4>Artificial Intelligence</h4>
            <FaRobot size="3em" className="m-4" />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde
              ea aperiam reiciendis vitae temporibus ipsam commodi, nostrum
              tempore totam.
            </div>
          </div>
        </div>
        <div className="card mx-4">
          <div className="card-body d-flex align-items-center justify-content-center flex-column">
            <h4>Track Your Progress</h4>
            <BsFillFileBarGraphFill size="3em" className="m-4" />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde
              ea aperiam reiciendis vitae temporibus ipsam commodi, nostrum
              tempore totam.
            </div>
          </div>
        </div>
        <div className="card mx-4">
          <div className="card-body d-flex align-items-center justify-content-center flex-column">
            <h4>Reflect On Past Recordings</h4>
            <BsFillCollectionPlayFill size="3em" className="m-4" />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde
              ea aperiam reiciendis vitae temporibus ipsam commodi, nostrum
              tempore totam.
            </div>
          </div>
        </div>
      </div>
      <Link className="btn btn-primary mt-4" to="/interview/0">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
