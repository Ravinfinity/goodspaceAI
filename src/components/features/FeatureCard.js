import React from "react";
import "./featurecard.scss";
import diamond from "../../assets/images/diamond.svg";

export const FeatureCard = ({ feature }) => {
  return (
    <div id="feature-card">
      <div className="feature-header">
        <div className="common-header">
          <div classsname="icon-container">
            {/* <img src={diamond} className="diamond-bg" /> */}
            <img src={feature.img} className="icon" />
            {/* <img src={`../assets/images/feature${feature.id}.svg`} /> */}
          </div>

          <h3>{feature.title}</h3>
        </div>
        {feature.highlight ? (
          <div className="highlight">Coming soon</div>
        ) : (
          <div></div>
        )}
      </div>
      <p>
        {feature.desc}{" "}
        {feature.span ? <span>{feature.span}</span> : <div></div>}
      </p>
    </div>
  );
};
