import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Statistics from "./components/Statistics/Statistics";
import Topic from "./components/Topic/Topic";
import Main from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Topic />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
