import React from "react";

const Quiz = ({ quiz }) => {
  //   console.log(quiz);
  const { id, question, correctAnswer, options } = quiz;
  const qs = question.split("<p>").join("").split("</p>").join("");

  return (
    <div className="bg-slate-300 p-5 rounded-xl w-2/3 mx-auto">
      <h2 className="text-xl font-semibold">{qs}</h2>
      <div>
        {options.map((option, idx) => (
          <p className="" key={idx}>{option}</p>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
