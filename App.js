import "./styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import components
import Main from "./Main";
import Quiz1 from "./Quiz1";
import Result from "./Result";

//react routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quiz1></Quiz1>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
