import React from 'react';

import './range-slider.scss';
import { Slider } from '@material-ui/core';
import {
  withStyles,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';

const RangeSlider = withStyles({
  root: {
    color: '#f62f5e'
  },
  rail: {
    color: '#efefef',
    height: '5px'
  },
  thumb: {
    backgroundColor: '#f62f5e',
    '&:focus,&:hover,&$active': {
      boxShadow: '0px 0px 0px 8px rgba(246, 47, 94, 0.16)',
    }
  },
  track: {
    backgroundColor: '#f62f5e'
  }
})(Slider);

export default RangeSlider;
