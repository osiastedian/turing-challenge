import React from 'react';

import './color-picker.scss';
import RadioButton from '../radio-button/radio-button';

/* eslint-disable-next-line */
export interface ColorPickerProps {}

export const ColorPicker = (props: ColorPickerProps) => {
  const colors = [
    '#6eb2fb',
    '#00d3ca',
    '#f62f5e',
    '#fe5c07',
    '#7ed321',
    '#9013fe'
  ];
  return (
    <div className="flex justify-around">
      {colors.map((color, index) => (
        <RadioButton color={color} key={index}></RadioButton>
      ))}
    </div>
  );
};

export default ColorPicker;
