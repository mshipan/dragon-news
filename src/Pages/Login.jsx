import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        toast.success("Login Successfully", {
          autoClose: 3000,
        });
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-[#F3F3F3]">
      <div className="pt-9">
        <Navbar></Navbar>
      </div>
      <div className="h-[90vh] flex flex-col items-center justify-center">
        <div className="bg-white w-2/5 p-16 rounded-lg">
          <h1 className="text-4xl font-semibold mb-14 text-center">
            Login your account
          </h1>
          <ToastContainer />
          <div className="border-t border-[#E7E7E7] w-full"></div>
          <form onSubmit={handleLogin} className="mt-12">
            <label className="label">
              <span className="text-xl font-semibold mb-4">Email adddress</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <span className="text-xl font-semibold mb-4 mt-6">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered w-full mb-8"
              required
            />
            <button
              className="text-xl font-semibold bg-[#403F3F] text-white w-full py-5 rounded-lg mb-8"
              type="submit"
            >
              Login
            </button>
            <p className="text-center">
              Dont’t Have An Account ?
              <Link to="/register" className="font-semibold text-red-500 ml-2">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
