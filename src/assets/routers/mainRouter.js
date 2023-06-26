import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../components/layouts/MainLayout";
import Home from "../../pages/home/Home";
import Add from "../../pages/add/Add";
import Edit from "../../pages/edit/Edit";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>errorElement</h2>,
    children: [
      { index: true, element: <Home /> },
      { path: "add", element: <Add /> },
      { path: "edit/:id", element: <Edit /> },
    ],
  },
]);
export default mainRouter;
