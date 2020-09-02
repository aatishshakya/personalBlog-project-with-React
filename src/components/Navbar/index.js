import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  const [search, setSearch] = useState(false);

  const openSearch = (e) => {
    console.log("i am in openSearch");
    setSearch(true);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched");
  };
  const searchClass = search ? "searchInput active" : "searchInput";
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            onClick={openSearch}
            className="searchIcon"
            alt="Search"
            src={require("../../assets/icons/search.png")}
          />
        </form>
      </div>
    </div>
  );
};
export default Navbar;
