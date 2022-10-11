import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const loaderData = useLoaderData();
  const topicsData = loaderData.data;
  // console.log(topicsData);
  return (
    <div className="m-7">
      <h2 className="text-3xl text-purple-400">Topic Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topicsData.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
