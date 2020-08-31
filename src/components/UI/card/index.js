import React from "react";
import "./style.css";
const Card = (props) => (
  <div
    className="card"
    style={{ width: props.width ? props.width : "100%" }}
    {...props}
  >
    {props.children}
  </div>
);

export default Card;
