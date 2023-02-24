import React from "react";
import { Routes, Route } from "react-router-dom";

import Card from "./pages/Card";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Card />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
