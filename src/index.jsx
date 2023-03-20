import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorSlider } from './ColorSlider/ColorSlider';
import './style.css';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <ColorSlider
        baseColor="red"
        colorName="Červená"
      />
      <ColorSlider
        baseColor="green"
        colorName="Zelená"
      />
      <ColorSlider
        baseColor="blue"
        colorName="Modná"
      />
      <div
        className="color-box"
        id="color-box"></div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
