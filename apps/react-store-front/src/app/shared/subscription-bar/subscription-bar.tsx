import React from 'react';

import './subscription-bar.scss';
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
  InputBase,
  Fab
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

/* eslint-disable-next-line */

const useStyles = makeStyles({
  root: {
    backgroundColor: '#efefef'
  },
  subscribeButton: {
    backgroundColor: '#f62f5e',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '1em',

    '&:hover': {
      backgroundColor: 'white',
      color: '#f62f5e'
    }
  }
});

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main
      }
    }
  })
)(InputBase);

export interface SubscriptionBarProps {}

export const SubscriptionBar = (props: SubscriptionBarProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <div className="align-middle container flex mx-auto p-3">
        <span className="font-bold my-auto flex-1">
          SUBSCRIBE FOR SHOP NEWS, UPDATES, AND SPECIAL OFFERS
        </span>
        <div className="flex relative">
          <BootstrapInput />
          <img
            src="/assets/icon/icons-email-black.png"
            className="absolute bottom-0 ml-2 my-auto top-0"
          />
        </div>
        <Fab
          variant="extended"
          aria-label="shop"
          className={classes.subscribeButton}
        >
          Shop Brand
        </Fab>
      </div>
    </div>
  );
};

export default SubscriptionBar;
