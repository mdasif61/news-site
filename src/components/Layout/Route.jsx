import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Category from "./Category";
import NewsLayout from "./NewsLayout";
import SingleNews from "./SingleNews";
import LoginLayout from "./LoginLayout";
import Login from "./Login";
import Register from "./Register";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navigate to='category/0'></Navigate>
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:1020/category/${params.id}`),
      },
    ],
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<SingleNews></SingleNews>,
        loader:({params})=>fetch(`http://localhost:1020/news/${params.id}`)
      }
    ]
  },
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
]);

export default router;
