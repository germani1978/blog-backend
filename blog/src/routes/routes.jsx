import Login from "../pages/Login";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Home from "../pages/Home";
import EditPage from "../pages/EditPage";

const routes = [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/post/:id",
      element: <Post/>,
    },
    {
      path: "/edit",
      element: <EditPage />,
    },
    {
      path: "/edit/:id",
      element: <EditPage />,
    },
  ]

  export default routes;