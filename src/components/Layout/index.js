import React from "react";
import "./style.css";
import SideBar from "../SideBar";
const Layout = (props) => {
  return (
    <div className="container">
      <React.Fragment>
        {props.children}
        <SideBar />
      </React.Fragment>
    </div>
  );
};
export default Layout;
