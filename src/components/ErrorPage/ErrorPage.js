import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center h-full p-14 dark:bg-gray-800">
      <div className=" px-5 my-7 mx-auto container flex flex-col items-center justify-center ">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            404!
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page right now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
