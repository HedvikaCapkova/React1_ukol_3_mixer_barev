import React, { useState } from 'react';
import './ColorSlider.css';

export const ColorSlider = ({ baseColor, colorName }) => {
  return (
    <div className="sliders">
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        value="0"
      />
    </div>
  );
};
