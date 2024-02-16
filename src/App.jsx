import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { Performers } from "./pages/Performers.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ucinkujici" element={<Performers />} />
      </Routes>
    </Router>
  );
}

export default App;
