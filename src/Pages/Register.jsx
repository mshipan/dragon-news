import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const { user, createUser, auth } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        console.log(loggedUser);
        // update name field
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
        toast.success("User Registration Successfully", {
          autoClose: 3000,
        });
        form.reset();
        // ...
      })
      .catch((error) => {
        console.error(error);
        // ..
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="bg-[#F3F3F3]">
      <div className="pt-9">
        <Navbar></Navbar>
      </div>
      <div className="h-[90vh] flex flex-col items-center justify-center">
        <div className="bg-white w-2/5 p-16 rounded-lg">
          <h1 className="text-4xl font-semibold mb-14 text-center">
            Register your account
          </h1>
          <ToastContainer />
          <div className="border-t border-[#E7E7E7] w-full"></div>
          <form onSubmit={handleRegister} className="mt-12">
            <label className="label">
              <span className="text-xl font-semibold mb-4 mt-6">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full mb-8"
              name="name"
              required
            />
            <label className="label">
              <span className="text-xl font-semibold mb-4">Email adddress</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              name="email"
              required
            />
            <label className="label">
              <span className="text-xl font-semibold mb-4 mt-6">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mb-5"
              name="password"
              required
            />
            <div className="flex items-center mb-7">
              <input
                onClick={handleAccepted}
                type="checkbox"
                name="accept"
                className="checkbox"
              />
              <label
                htmlFor="checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Accept
                <Link to="/terms" className="font-bold ml-1">
                  Term & Conditions
                </Link>
              </label>
            </div>
            <button
              className="text-xl font-semibold bg-[#403F3F] text-white w-full py-5 rounded-lg mb-8"
              disabled={!accepted}
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
