import React from "react";
import "./App.css";
import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
