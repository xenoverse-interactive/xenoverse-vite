import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./stars.css";
import "./mainpage.css";
import "./newpage.css";
import Mainpage from "./Mainpage";
import Layout from "./Layout";
import Newspage from "./Newspage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Mainpage />} />
            <Route path="news/:id" element={<Newspage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Layout /> */}
    </>
  );
}

export default App;
