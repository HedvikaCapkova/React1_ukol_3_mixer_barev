import React from 'react';
import { createRoot } from 'react-dom/client';
import { ColorSlider } from './ColorSlider/ColorSlider';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <ColorSlider />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
