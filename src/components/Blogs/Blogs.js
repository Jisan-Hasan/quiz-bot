import React from "react";

const Blogs = () => {
  return (
    <div className="m-7 grid gap-4">
      <div class="block p-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What is the purpose of React Router?
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          React Router is a standard library for routing in React. ReactJS
          Router is mainly used for developing Single Page Web Applications.
          React Router is used to define multiple routes in the application.
          When a user types a specific URL into the browser, and if this URL
          path matches any 'route' inside the router file, the user will be
          redirected to that particular route.
        </p>
      </div>

      <div class="block p-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          How does contex API works?
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>

      <div class="block p-6  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What are the uses of useRef hook?
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
