import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Search.css";

export const Search = () => {
  return (
    <div className="search">
      <Header />
      <div className="search-area">
        <h1>Discover Your Favorite Dish</h1>
        <div className="search-bar">
          <input type="text" placeholder="eg. Italian, Pizza, Sweets" />
          <button>Search</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
