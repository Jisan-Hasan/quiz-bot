import React from "react";

const Quiz = ({ quiz }) => {
  //   console.log(quiz);
  const { id, question, correctAnswer, options } = quiz;
  const qs = question.split("<p>").join("").split("</p>").join("");

  return (
    <div className="bg-slate-300 p-5 rounded-xl">
      <div className="text-center">
      <h2 className="text-xl font-bold mb-3">{qs}</h2>
      </div>
      <div className="mx-5 grid gap-3">
        {options.map((option, idx) => (
          <p className="bg-lime-400 px-8 py-5 rounded-xl text-lg font-semibold hover:cursor-pointer" key={idx}>
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
