import React, { useState } from 'react';
import './ColorSlider.css';

export const ColorSlider = () => {
  return (
    <div class="sliders">
      <label for="red">Červená</label>
      <input
        type="range"
        class="slider slider--red"
        id="redSlider"
        min="0"
        max="255"
        value="0"
      />
    </div>
  );
};
