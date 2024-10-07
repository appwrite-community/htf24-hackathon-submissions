import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="text-xl font-semibold sticky top-16 h-16 bg-slate-200 p-5 py-3 shadow-2xl my-5 rounded-lg">
      {title}
    </h2>
  );
};

export default Heading;
