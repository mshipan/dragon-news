import React from "react";
import {
  AiOutlineGoogle,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import qzon1 from "../assets/qZone1.png";
import qzon2 from "../assets/qZone2.png";
import qzon3 from "../assets/qZone3.png";
import amazeBg from "../assets/bg.png";

const RightNav = () => {
  return (
    <div className="pl-4 pr-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold mb-4">Login With</h1>
        <button className="btn btn-outline rounded-none normal-case border-sky-500 text-sky-500 hover:border-sky-500 hover:bg-sky-500">
          <AiOutlineGoogle className="text-lg mr-2" /> Login with Google
        </button>
        <button className="btn btn-outline rounded-none normal-case">
          <BsGithub className="text-lg mr-2" /> Login with Github
        </button>
      </div>

      <div className="mb-5">
        <h1 className="text-xl font-bold mt-7 mb-5">Find Us On</h1>

        <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full pl-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <NavLink to="#" className="flex items-center gap-3">
              <BsFacebook className="text-lg text-blue-500" /> Facebook
            </NavLink>
          </li>
          <li className="w-full pl-4 py-4 border-b border-gray-200 dark:border-gray-600">
            <NavLink to="#" className="flex items-center gap-3">
              <AiFillTwitterCircle className="text-lg text-sky-500" /> Twitter
            </NavLink>
          </li>
          <li className="w-full pl-4 py-4 border-b border-gray-200 dark:border-gray-600">
            <NavLink to="#" className="flex items-center gap-3">
              <AiOutlineInstagram className="text-lg text-pink-500" /> Instagram
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="bg-[#F3F3F3] p-4 mb-5">
        <h1 className="text-xl font-bold mb-5">Q-Zone</h1>
        <div className="flex flex-col gap-5">
          <img src={qzon1} alt="" />
          <img src={qzon2} alt="" />
          <img src={qzon3} alt="" />
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <img src={amazeBg} className="w-full h-auto" alt="" />
        <div className="absolute text-center max-w-[250px]">
          <h1 className="text-3xl font-bold text-white mb-5">
            Create an Amazing Newspaper
          </h1>
          <p className="text-white mb-7">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="py-2 px-5 bg-red-600 text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
