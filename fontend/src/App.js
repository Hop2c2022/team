import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {About} from './page/About';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
