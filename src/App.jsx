import React from "react";
import { Routes, Route } from "react-router-dom";

import Card from "./pages/Card";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Card />}></Route>
    </Routes>
  );
};

export default App;
