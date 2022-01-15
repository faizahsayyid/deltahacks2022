import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Interview = () => {
  return (
    <div className="col-8" style={{ height: "90vh" }}>
      <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
        <div className="bg-secondary h-50 w-75"></div>
        <div>
          <button className="btn btn-primary m-2">
            <BsFillCameraVideoFill />
          </button>
          <button className="btn btn-danger">Record</button>
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
