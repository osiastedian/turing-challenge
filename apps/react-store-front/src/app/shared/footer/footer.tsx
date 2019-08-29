import React from 'react';

import './footer.scss';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2e2e2e',
    color: '#eaeaea'
  },
  grey: {
    color: '#eaeaea'
  }
});

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <ul className="flex justify-around p-10 px-32 text-2xl">
            <li className="font-bold">Women</li>
            <li className="font-bold">Men</li>
            <li className="font-bold">Kids</li>
            <li className="font-bold">Shoes</li>
            <li className="font-bold">Brands</li>
          </ul>
          <ul className="flex justify-center mb-5">
            <li className="mx-2">
              <img src="/assets/icon/icons-instagram-grey.png" alt="" />
            </li>
            <li className="mx-2">
              <img src="/assets/icon/icons-pinterest-grey.png" alt="" />
            </li>
            <li className="mx-2">
              <img src="/assets/icon/icons-twitter-grey.png" alt="" />
            </li>
            <li className="mx-2">
              <img src="/assets/icon/icons-facebook-grey.png" alt="" />
            </li>
          </ul>
          <ul
            className=" flex justify-center mb-5"
          >
            <li className="mx-2">
              <a className={classes.grey} href="http://">
                &copy;2016 shopmate Ltd
              </a>
              F
            </li>
            <li className="mx-2">
              <a className={classes.grey} href="http://">
                Contact
              </a>
            </li>
            <li className="mx-2">
              <a className={classes.grey} href="http://">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
