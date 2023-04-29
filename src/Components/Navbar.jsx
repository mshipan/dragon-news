import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userImg from "../assets/user.svg";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // log out function from auth provider
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto flex justify-end">
      <div className="flex items-center w-[56%] justify-between">
        <ul className="flex gap-5 items-center ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <div>{user && <h1>{user.displayName}</h1>}</div>
          {user && <img src={userImg} alt="" />}
          {user ? (
            <NavLink
              onClick={handleLogOut}
              to=""
              className="px-5 py-2 bg-gray-900 text-white font-bold"
            >
              Log Out
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-5 py-2 bg-gray-900 text-white font-bold"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-5 py-2 bg-gray-900 text-white font-bold"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
