import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
const Logo = (props) => (
  <div className="logo" {...props}>
    <img alt="logo" src={require("../../Images/Logo/logo.png")} />
  </div>
);
export default Logo;
