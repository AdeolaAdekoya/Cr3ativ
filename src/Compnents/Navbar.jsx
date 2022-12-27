import React from 'react'
import "../css/Landingpage.css";
import logo from "../assets/Frame 1.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
        <header>
        <nav>
          <div>
            <img src={logo} alt="Cr3ativ logo"  onClick={() => navigate("/")}  />
          </div>

          <ul>
            <li> <NavLink  to="*">Product</NavLink></li>
            <li><NavLink  to="*">Partners</NavLink></li>
            <li><NavLink  to="*">Learn</NavLink></li>
          </ul>
          <button id="login"><a href="*">Log in</a></button>
          <button id="signup"><a href="*">Sign up for free</a></button>
        </nav>
      </header>

    </div>
  )
}

export default Navbar