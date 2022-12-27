import React from "react";
import "../css/Landingpage.css";
import logowhite from "../assets/logowhite.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

  return (
    <div>
      <footer>
        <div id="fcontent">
          <div id="logo">
            <img src={logowhite} alt=""  onClick={() => navigate("/")}/>
          </div>

          <div>
            <ul>
              <li> <a href="*">Product</a> </li>
              <li> <a href="*">Partners</a> </li>
              <li> <a href="*">Learn</a> </li>
              <li> <a href="*">Privacy</a> </li>
              <li> <a href="*">Terms</a></li>
              <li> <a href="*">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
