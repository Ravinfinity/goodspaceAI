import React from "react";
import "./navbar.scss";
import brandLogo from "../assets/images/brand-logo.svg";
import { StartBtn } from "./common/StartBtn";
import menu from "../assets/images/menu.svg";

export const Navbar = () => {
  return (
    <nav>
      <img src={brandLogo} />
      <div className="navbar-right">
        <ul>
          <li>Blogs</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Integrations</li>
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
