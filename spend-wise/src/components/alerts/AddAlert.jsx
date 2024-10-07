import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../store/alertSlice";

const AddAlert = ({ text }) => {

  const dispatch = useDispatch();

  const resetAlert = () => {
    dispatch(reset());
  };

  return (
    <div
      id="alert-1"
      className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50"
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="ms-3 text-sm font-medium">{text}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-1"
        aria-label="Close"
        onClick={resetAlert}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddAlert;
