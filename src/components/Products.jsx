

import React, { useState } from "react";
import { Link } from "react-router-dom";


function Products({ sportsData }) {
  const [selectedSport, setSelectedSport] = useState(null);


  const handleSportSelection = (sportName) => {
    setSelectedSport((prevSelectedSport) =>
      prevSelectedSport === sportName ? null : sportName
    );
  };

  return (
    <div className="products-container">
      
      <div className="sports-buttons">
        <button onClick={() => handleSportSelection("basketball")}>
          Basketball
        </button>
        <button onClick={() => handleSportSelection("football")}>
          Football
        </button>
        <button onClick={() => handleSportSelection("tennis")}>Tennis</button>
      </div>
      {Object.keys(sportsData).map((sportName) => (
        <div key={sportName} className={`sport-section ${selectedSport === sportName ? 'active' : ''}`}>
          {/* <h2>{sportName.toUpperCase()}</h2> */}
          {selectedSport === sportName && Object.keys(sportsData[sportName]).map((categoryName) => (
            <div key={categoryName} className="category-section">
              <h3>{categoryName}</h3>
              <div className="item-container">
                {sportsData[sportName][categoryName].map((item) => (
                  <div key={item.id} className="item-box">
                    <Link to={`/description/${sportName}/${item.id}`}>
                      <img src={item.image} alt={item.name} className="img"/>
                      <p>{item.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Products;