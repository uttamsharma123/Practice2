import React from "react";
import { Link } from "react-router-dom"
import "./Css/Header.css";


function Header() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand" href="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to="/" className="nav-item">
          <li> Home </li>
        </Link>

        <Link to="/Create-User" className="nav-item" >
          <li > Create-User </li>
        </Link>

        <Link to="/Add-User" className="nav-item" >
          <li>Add User</li>
        </Link>
      


      </ul>
    </div>
  </nav>
}

export default Header;