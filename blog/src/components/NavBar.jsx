import Logo from "./Logo";
import { Link } from "react-router-dom";
import PenBlack from "./PenBlack";

const NavBar = () => {

  return (
    <div className="w-full bg-slate-500 flex justify-between items-center py-3 px-6">
      <button className="w-16">
        <Link to="/"><Logo/></Link>
      </button>
      <div className="nav">
        <nav>
         <ul className="flex text-slate-200 font-bold text-lg justify-center items-center gap-6 uppercase"> 
            <li className="hover:scale-110">
              <a className="" href="/ciencia">Ciencia</a>
            </li>
            <li className="hover:scale-110">
              <a  href="/arte">Arte</a>
            </li>
            <li className="hover:scale-110">
              <a  href="/economia">Economía</a>
            </li>
            <li className="hover:scale-110">
              <a  href="/politica">Política</a>
            </li>
            <li className="hover:scale-110">
              <a  href="/musica">Música</a>
            </li>
            <li className="hover:scale-110">
              <a  href="/tiempo">Tiempo</a>
            </li>
            <li className="hover:scale-110">
              <a  href="/naturaleza">Naturaleza</a>
            </li>
            <li className="hover:scale-110">
              <a  href="/edit"><PenBlack/></a>
            </li>
          </ul> 
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
