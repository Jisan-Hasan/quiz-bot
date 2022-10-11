import { Tooltip } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const loaderData = useLoaderData();
  const topicsData = loaderData.data;
  const data = [];
  topicsData.forEach((quiz) => {
    const singleData = { name: quiz.name, total: quiz.total };
    data.push(singleData);
  });
  console.log(topicsData);
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-yellow-300">
        Statistics of the Quizes
      </h2>
      <div className="flex justify-center mt-12">
        <ResponsiveContainer width={400} height={400}>
          <BarChart data={data}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
