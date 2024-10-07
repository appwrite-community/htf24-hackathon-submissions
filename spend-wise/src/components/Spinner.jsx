import React from "react";

const Spinner = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* <div className="bg-white p-8 rounded shadow-md w-96"> */}
        <img src="./loader.gif" alt="Loading ..." />
      {/* </div> */}
    </div>
  );
};

export default Spinner;
