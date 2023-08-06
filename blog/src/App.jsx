import NavBar from "./components/NavBar.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from './components/Footer.jsx'
import Home from "./pages/Home.jsx";
import EditPage from "./pages/EditPage.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const Layout = () => {
  return(
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/edit",
        element: <EditPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
      },
      {
        path: "/post/:id",
        element: <Post/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
])

function App() {
  return (
    <div className="app w-full flex flex-col items-center min-h-screen bg-blue-100">
      <RouterProvider router={router}/>
    </div>
  );
}



export default App;
