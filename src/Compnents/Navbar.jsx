import React, { useState, useEffect } from "react";
import "../css/Landingpage.css";
import logo from "../assets/Frame 1.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [navOpen]);

  return (
    <div>
      <header>
        <nav>
          <div id="header-menu">
            <div>
              <img
                src={logo}
                alt="Cr3ativ logo"
                onClick={() => navigate("/")}
              />
            </div>

            <div id="menu-open" style={{ top: navOpen ? 0 : "-100%" }}>
              <NavLink
                className="list_menu"
                onClick={() => setNavOpen(false)}
                to="*"
              >
                Product
              </NavLink>

              <NavLink
                className="list_menu"
                onClick={() => setNavOpen(false)}
                to="*"
              >
                Partners
              </NavLink>
              <NavLink
                className="list_menu"
                onClick={() => setNavOpen(false)}
                to="*"
              >
                Learn
              </NavLink>

           
                <NavLink onClick={() => setNavOpen(false)} to="*" id="login">
                  Log in
                </NavLink>
                <NavLink  onClick={() => setNavOpen(false)} to="*" id="signup">
                  Sign up for free
                </NavLink>
         
            </div>
           

              <div className="menu-toggle">
            <button
              type="button"
              className="nav-toggler"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span></span>
            </button>
          </div>
          </div>

        
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
