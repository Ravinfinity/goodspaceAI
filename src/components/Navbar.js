import React from "react";
import { useState } from "react";
import "./navbar.scss";
import brandLogo from "../assets/images/brand-logo.svg";
import { StartBtn } from "./common/StartBtn";
import menu from "../assets/images/menu.svg";

export const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const navHandler = () => {
    if (window.scrollY > 0) {
      setDrop(true);
    }
    if (window.scrollY <= 0) {
      setDrop(false);
    }
  };

  window.addEventListener("scroll", navHandler);
  return (
    <nav className={`${drop ? "drop-shadow" : ""}`}>
      <a href="#">
        <img src={brandLogo} />
      </a>
      <div className="navbar-right">
        <ul>
          <a href="#reviews">
            <li>
              <p>Blogs</p>
              <div className="bottom-bar"></div>
            </li>
          </a>
          <a href="#features">
            <li>
              <p>Features</p>
              <div className="bottom-bar"></div>
            </li>
          </a>
          <a href="#contact-form">
            <li>
              <p>Pricing</p>
              <div className="bottom-bar"></div>
            </li>
          </a>
          <a href="#integrations">
            <li>
              <p className="bottom-bar">Integrations</p>
              <div className="bottom-bar"></div>
            </li>
          </a>
        </ul>
        <div className="btn-container">
          <img src={menu} />
          <div className="start-btn">
            <StartBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};
