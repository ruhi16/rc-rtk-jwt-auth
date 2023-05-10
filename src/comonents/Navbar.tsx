import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="#">
            Navbar
          </NavLink>
          
          <ul className="navbar-nav align-left">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/welcome"}>Welcome</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/login"}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/register"}>Register</NavLink>
            </li>
          </ul>
            
        </div>
      </nav>
    </>
  );
}

export default Navbar;
