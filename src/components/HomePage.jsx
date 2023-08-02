// import React from "react";
// function HomePage() {
//   return (
//     <div className="cover-page">
//       <div className="logo">
//       <img src="1.png"/>
//       </div>
      
//       <div className="logo_s">
//         <button className="btn_0">KICKOFF MART</button>
//         <p>-Your one stop shop for every sportwear-</p>
//       </div>

//          <div className="btn_1">
//       <button className="btn1" >HOME</button>
//       <button className="btn2">PRODUCTS</button>
//       <button className="btn3">WISHLIST</button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;






import React from "react";
import { Link } from "react-router-dom"; 

function HomePage() {
  return (
    <div className="cover-page">
      <div className="logo">
        <img src="1.png" alt="Logo" />
      </div>
      
      <div className="logo_s">
        <button className="btn_0">KICKOFF MART</button>
        <p>-Your one stop shop for every sportwear-</p>
      </div>

      <div className="btn_1">
        {/* Use Link component from react-router-dom to create navigation links */}
        <Link to="/home" className="btn1">HOME</Link>
        <Link to="/products" className="btn2">PRODUCTS</Link>
        <Link to="/wishlist" className="btn3">WISHLIST</Link>
      </div>
    </div>
  );
}

export default HomePage;
