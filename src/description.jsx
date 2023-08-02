import React from "react";
import { useParams } from "react-router-dom";
import "./Description.css"; // Import the CSS file for custom styles

function Description({ sportsData }) {
  const { sportName, id } = useParams();

  const item =
    sportsData[sportName] &&
    sportsData[sportName][
      Object.keys(sportsData[sportName]).find(
        (categoryName) =>
          sportsData[sportName][categoryName].some(
            (item) => item.id === parseInt(id, 10)
          )
      )
    ].find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <div className="description">Item not found</div>;
  }

  return (
    <div className="description">
      <h2 className="description-title">{item.name}</h2>
      <div className="description-content">
        <img ClassName="image" src={item.image} alt={item.name} className="description-image" />
        <p ClassName="description">{item.description}</p>
        <p ClassName="price">Price: {item.price}</p>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
}

export default Description;

