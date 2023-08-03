// Main.jsx
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Products from "./Products";
import Wishlist from "./Wishlist";
import Login from "./Login";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default Main;
