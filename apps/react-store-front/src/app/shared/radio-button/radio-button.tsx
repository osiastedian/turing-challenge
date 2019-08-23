import React, { Component } from 'react';

import './radio-button.scss';

/* eslint-disable-next-line */
export interface RadioButtonProps {
  color?: string;
}

const defaultColor = '#e6e6e6';

export class RadioButton extends Component<RadioButtonProps> {

  constructor(props: RadioButtonProps) {
    super(props);
    this.state = {...props};
  }

  render() {

    const {color} = this.state as Readonly<RadioButtonProps>;
    return (
      <div className="my-radio">
          <input type="radio" name="color" id="color" />
          <span className="checkmark" style={{ backgroundColor: color || defaultColor}} />
        </div>
    );
  }
}

export default RadioButton;
