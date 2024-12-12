import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
