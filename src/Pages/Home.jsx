import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex container mx-auto">
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
