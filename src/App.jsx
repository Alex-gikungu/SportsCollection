

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Description from "./components/Description";
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './components/Footer'
import SignupLoginForm from './components/Login '


function App() {
  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/sports")
      .then((res) => res.json())
      .then((data) => setSportsData(data));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <h1 className="productss">PRODUCTS</h1>
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
  <SignupLoginForm/>

<Footer/>
    </div>
  );
}

export default App;