import React from "react";
import "./footer.scss";
import locationIcon from "../assets/images/location-img.svg";
import callIcon from "../assets/images/call-icon.svg";
import linkedIn from "../assets/images/linkedIn.svg";
import youtube from "../assets/images/youtube.svg";
import insta from "../assets/images/instagram.svg";
import brandLogo from "../assets/images/brand-logo.svg";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-main">
        <div className="logo-container">
          <img src={brandLogo} />
        </div>
        <div className="contacts">
          <div className="personal">
            <div>
              <img src={locationIcon} />
              <p>Address</p>
            </div>
            <div>
              <img src={callIcon} />
              <p>+91 1234567890</p>
            </div>
          </div>
          <div className="socials">
            <p>Social Media</p>
            <div className="social-icons">
              <a href="#">
                <img src={linkedIn} />
              </a>
              <a href="#">
                <img src={youtube} />
              </a>
              <a href="#">
                <img src={insta} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="filler"></div>
      <div className="base-footer">
        <ul>
          <a href="#reviews">
            <li>Blogs</li>
          </a>
          <a href="#features">
            <li>Features</li>
          </a>
          <a href="#contact-form">
            <li>Pricing</li>
          </a>
          <a href="#integrations">
            <li>Integrations</li>
          </a>
        </ul>
        <div className="label">Copyright © 2024 • ExpenseBook</div>
      </div>
    </div>
  );
};
