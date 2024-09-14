import React from "react";
import "./form.scss";
import { StartBtn } from "./StartBtn";
import ellipse from "../../assets/images/Ellipse.svg";

export const Form = () => {
  return (
    <div id="form">
      <div className="form-header">
        <div className="form-inputs">
          <input id="name" type="text" placeholder="Name" />
          <input id="email" type="email" placeholder="Official email ID" />
        </div>
        <StartBtn />
      </div>
      <div className="form-desc">
        <p>30 Days free trial</p>
        <img src={ellipse} />
        <p>Upto 10 users</p>
      </div>
    </div>
  );
};
