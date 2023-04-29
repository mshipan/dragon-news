import React from "react";
import { Outlet } from "react-router-dom";
import RightNav from "../Components/RightNav";
import Header from "../Components/Header";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-row container mx-auto mt-5">
        <div className="basis-3/4">
          <Outlet></Outlet>
        </div>
        <div className="basis-1/4">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
