import React from "react";
import "./features.scss";
import { FeatureCard } from "./FeatureCard";
import features from "../../data/features";

export const Features = () => {
  return (
    <div id="features">
      <h2 className="text-gradient">Features that suit your needs</h2>
      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};
