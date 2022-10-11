import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const loaderData = useLoaderData();
  const { total, name, questions } = loaderData.data;
  console.log(loaderData);
  return (
    <div className="m-6">
      <h2>Topic: {name}</h2>
      <h2>Total Quizes {total}</h2>
      <div className="grid grid-cols-1 gap-3">
        {questions.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quizes;
