import React from 'react';

import './button.scss';

import MatButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

/* eslint-disable-next-line */

const Button = withStyles({
  root: {
    color: '#6c6c6c',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#e61f4e',
      color: 'white'
    },
  },
  containedPrimary: {
    backgroundColor: '#f62f5e',
    color: 'white'
  },
})(MatButton);

export default Button;
