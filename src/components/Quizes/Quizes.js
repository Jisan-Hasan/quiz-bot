import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const loaderData = useLoaderData();
  const { total, name, questions } = loaderData.data;
  console.log(loaderData);
  return (
    <div className="m-6 w-2/3 mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Topic: {name}</h2>
        <h2 className="text-lg font-semibold">Total Quizes {total}</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-6">
        {questions.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quizes;
