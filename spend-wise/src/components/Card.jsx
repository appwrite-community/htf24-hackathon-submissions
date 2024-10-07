import React from "react";

const Card = ({title, text}) => {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default Card;
