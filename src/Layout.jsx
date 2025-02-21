import React from "react";
import Mainpage from "./Mainpage";
import Newspage from "./Newspage";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {/* <Mainpage /> */}
      {/* <Newspage /> */}
      <Outlet />
    </div>
  );
}
