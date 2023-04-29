import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LeftNav from "./Components/LeftNav";
import RightNav from "./Components/RightNav";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="mt-5 mb-12">
        <Navbar></Navbar>
      </div>

      <div className="flex flex-row container mx-auto">
        <div className="basis-1/4">
          <LeftNav></LeftNav>
        </div>
        <div className="basis-2/4">
          <Outlet></Outlet>
        </div>
        <div className="basis-1/4">
          <RightNav></RightNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
