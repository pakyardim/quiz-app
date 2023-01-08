import React from "react";
import { easterEgg } from "../easteregg";

const Loading = () => {
  const randomIndex = Math.floor(Math.random() * easterEgg.length);
  const randomText = easterEgg[7].text;

  return (
    <div class="loader">
      <p className="easter">{randomText}</p>
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
