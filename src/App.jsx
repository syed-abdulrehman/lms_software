import { useState } from "react";
import Login from "./loginsignup/login";
import "../src/App.css";
import Signup from "./loginsignup/signup";
import ButtonAppBar from "./loginsignup/appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./loginsignup/appbar";
import Sidebar from "./loginsignup/drawer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Sidebar />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
