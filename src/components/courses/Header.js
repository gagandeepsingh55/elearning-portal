import React from "react";
// import "./Header.css";

const Header = (props) => {
  return (
    <div className="card" style={{background: "black"}}>
        <div className="card-text">
          <div className="text-left" style={{color: "white"}}>{props.value}</div>
          <div className="card-title" style={{color: "white"}}>{props.value2}</div>
        </div>
        <img alt="..." src="/Mask Group 1@2x.png" className="card-img-overlay " style={{float:"right"}}></img>
    </div>
  );
};

export default Header;
