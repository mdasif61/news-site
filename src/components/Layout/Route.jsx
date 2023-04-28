import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Category from "./Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/categorys/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:1000/categorys/${params.id}`),
      },
    ],
  },
]);

export default router;
