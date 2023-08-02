import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./Products";
import Description from "./description";

function App() {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sports")
      .then((res) => res.json())
      .then((data) => setSportsData(data));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <h1>SPORTS CENTRE</h1>
        <Routes>
          <Route
            exact
            path="/"
            element={<Products sportsData={sportsData} />}
          />
          <Route
            path="/description/:sportName/:id"
            element={<Description sportsData={sportsData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

