import React, { useState } from 'react';
import './styles.scss';

const getRamColor = () => {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const ramdomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[ramdomIndex];
}

const ColorBox = (props) => {
  const [color, setColor] = useState(() => {
    const initState = localStorage.getItem('color_box') || 'deeppink';
    return initState;
  });
  const handleBoxClick = () => {
    const newColor = getRamColor();
    setColor(newColor);
    localStorage.setItem('color_box', newColor);
  }
  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
    </div>
  );
}

export default ColorBox;