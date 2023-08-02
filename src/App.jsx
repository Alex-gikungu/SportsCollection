// import React from 'react'
// import Products from './components/Products'
// import './App.css'

// function App() {
  

//   return (
//     <div>
//       <h1 className='productss'>PRODUCTS</h1>
//       <Products/>

// </div>
    
//   )
// }

// export default App


import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Description from "./components/Description";

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
    </div>
  );
}

export default App;