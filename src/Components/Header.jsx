import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-12 mb-7">
        <img src={logo} alt="" />
        <p className="mt-5 mb-3">
          <small>Journalism Without Fear or Favour</small>
        </p>
        {/* Moment js */}
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="container mx-auto p-4 bg-gray-200 flex gap-5">
        <button className="py-2 px-5 bg-red-600 text-white font-semibold">
          Latest
        </button>
        {/* React Marquee */}
        <Marquee speed={50} gradient={false}>
          <div className="mr-10 font-semibold">
            Match Highlights: Germany vs Spain — as it happened !
          </div>
          <div className="font-semibold">
            Match Highlights: Germany vs Spain as...
          </div>
        </Marquee>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
