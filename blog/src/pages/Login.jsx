import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";
import { useEffect, useState } from "react";

const styleInput =
  "input-login px-3 py-1 outline-none mb-2 text-gray-600 w-full border-b border-solid border-gray";



const Login = () => {


  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();


    loginUser(user)
      .then( (data) => {
        console.log(data);
        navigate("/");
      } )
      .catch( (err) => {
        console.error(err.message)
        setError(true);
        setTimeout(() => setError(false), 3000);
      });
  }

  return (
    <div className="w-full" style={{margin:"auto 0"}}>
      <div className="flex flex-col justify-center item-center">
        <h1 className="text-4xl font-bold text-center mb-5 text-cyan-800">
          Login
        </h1>
        <form className="flex flex-col justify-center items-center p-7 rounded-md mx-auto bg-white">
          <input
            type="text"
            className={styleInput}
            placeholder="User name"
            required
            onChange={( e => setUser( prev => ({...prev, username:e.target.value })) )}

          />
          <input
            type="password"
            className={styleInput}
            placeholder="Password"
            required
            onChange={( e => setUser( prev => ({...prev, password:e.target.value })) )}

          />
          <button className="bg-cyan-700 text-white w-full py-2 rounded-md my-5 text-sm" onClick={handleLogin}>
            Login
          </button>
          <div>
            <p className="text-red-500 font-bold"> { error ? "Hay un error en los datos!!!" :""}</p>
          </div>
          <span className="mt-3">
            Do you have an account?{" "}
            <Link className="text-cyan-800 font-bold underline" to="/register" onClick={handleLogin}>
              Register
            </Link>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
