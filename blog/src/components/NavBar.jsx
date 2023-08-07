import Logo from "./Logo";
import { Link } from "react-router-dom";
import PenBlack from "./PenBlack";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const NavBar = () => {

  const { currentUser, logout } = useContext(AuthContext);
 
  return (
    <div className="w-full bg-slate-500 flex justify-between items-center py-3 px-6">
      <button className="w-16">
        <Link to="/"><Logo/></Link>
      </button>
      <div className="nav">
        <nav>
         <ul className="flex text-slate-200 font-bold text-lg justify-center items-center gap-6 uppercase"> 
            <Link to="/?cat=ciencia">
              <h6>Ciencia</h6>
            </Link>
            <Link to="/?cat=arte">
              <h6>Arte</h6>
            </Link>
            <Link to="/?cat=economia">
              <h6>Economia</h6>
            </Link>
            <Link to="/?cat=politica">
              <h6>Politica</h6>
            </Link>
            <Link to="/?cat=musica">
              <h6>Musica</h6>
            </Link>
            <Link to="/?cat=tiempo">
              <h6>Tiempo</h6>
            </Link>
            <Link to="/?cat=naturaleza">
              <h6>Naturaleza</h6>
            </Link>
            <Link to="/edit">
              <PenBlack/>
            </Link>
            <span className="text-blue-700">{currentUser?.username}</span>
            { currentUser ? <button className="text-red-900" onClick={logout}>LOGOUT</button> : <a href="/login">LOGIN</a>}
          </ul> 
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
