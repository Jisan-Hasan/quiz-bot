import React from "react";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg bg-yellow-300" src={logo} alt="" />
      <div className="p-5 flex justify-between items-center">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Total Quiz: {total}
          </p>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start Quiz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topic;
