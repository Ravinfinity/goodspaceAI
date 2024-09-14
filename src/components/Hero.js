import React from "react";
import "./hero.scss";
import { Form } from "./common/Form";

export const Hero = () => {
  return (
    <div id="hero">
      <div className="hero-main">
        <div className="upper">
          <h2>The World’s Most Configurable</h2>
          <h1>Travel & Expense Management Software</h1>
        </div>
        <p>
          Configure <span>any</span> rule. Enable a world class mobile
          experience for your users. Get seamless reporting & integrations.
          Inbuilt OCR expense scanning. Manage travel & non-travel expenses.
          Open APIs to connect with external systems.
        </p>
      </div>
      <div className="form-wrapper">
        <Form />
      </div>
    </div>
  );
};
