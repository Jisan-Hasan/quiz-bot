import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({ quiz }) => {
  const notify = (message) => toast(message);
  //   console.log(quiz);
  const { id, question, correctAnswer, options } = quiz;
  const qs = question.split("<p>").join("").split("</p>").join("");

  return (
    <div className="bg-slate-300  p-7 rounded-xl">
      <div className="flex justify-between px-6">
        <h2 className="text-xl font-bold mb-3">{qs}</h2>
        <EyeIcon
          onClick={() => notify(correctAnswer)}
          className="h-6 w-6 hover:cursor-pointer"
          title="Show Answer"
        />
      </div>
      <div className="mx-5 grid gap-3">
        {options.map((option, idx) => (
          <p
            className="bg-lime-400 px-8 py-5 rounded-xl text-lg font-semibold hover:cursor-pointer"
            key={idx}
          >
            {option}
          </p>
        ))}
      </div>
      {/* <p>{correctAnswer}</p> */}
      <button onClick={() => notify("correct")}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default Quiz;
