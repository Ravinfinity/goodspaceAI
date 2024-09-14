import React from "react";
import "./integrations.scss";
import arrow from "../../assets/images/divide-arrow.svg";
// import cardImg from "../assets/card-img1.svg";
import { IntegrationCard } from "./IntegrationCard";
import integrations from "../../data/integrations";

export const Integrations = () => {
  return (
    <div id="integrations">
      <h2 className="text-gradient">Integrations</h2>
      <img src={arrow} className="arrow-img" />
      <div className="cards-container">
        {integrations.map((integration) => (
          <IntegrationCard integration={integration} />
        ))}
      </div>
    </div>
  );
};
