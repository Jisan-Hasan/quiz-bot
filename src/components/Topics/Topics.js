import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const loaderData = useLoaderData();
  const topicsData = loaderData.data;
  // console.log(topicsData);
  return (
    <div className="m-7">
      <div className="mb-8 md:flex gap-5">
        <div className="flex justify-center md:static">
          <img
            className="w-full h-auto md:w-36 md:h-36 lg:w-28 lg:h-28 rounded"
            src="How-to-Learn-Programming.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-red-400">
            Choose Topic & Check Your Skills
          </h2>
          <p className="mt-5 font-medium ">
            If you are confident enough that you are a master of any topic then
            you can start quiz.
          </p>
          <p className="mt-1 font-medium ">
            By attending in the quiz you can check your skill level.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topicsData.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
