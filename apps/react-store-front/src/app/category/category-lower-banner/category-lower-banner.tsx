import React, { Component } from 'react';

import './category-lower-banner.scss';
import Button from '../../shared/button/button';
import { makeStyles } from '@material-ui/styles';
import { Fab } from '@material-ui/core';
import color from '@material-ui/core/colors/orange';

/* eslint-disable-next-line */

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url("/assets/images/images-shoe2.png")',
    backgroundSize: 'cover',
    color: 'white',

  },
  shopButton: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: '#f62f5e',
    '&:hover': {
      backgroundColor: '#f62f5e',
      color: 'white'
    }
  }
});

export interface CategoryLowerBannerProps {}


export const CategoryLowerBanner = () => {
  const classes = useStyles({});
  return (
    <div className={classes.root + " text-white p-20"}>
      <h3 className="font-serif text-6xl">Converse</h3>
      <p className="description font-bold text-3xl">
        Explore styles tought enough to handle your workouts.
      </p>
      <Fab variant="extended" aria-label="shop" className={classes.shopButton}>
        Shop Brand
      </Fab>
    </div>
  );
};

export default CategoryLowerBanner;
