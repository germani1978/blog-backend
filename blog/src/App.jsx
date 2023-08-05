import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="app w-full flex flex-col items-center min-h-screen bg-blue-100">
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
