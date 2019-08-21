import React from 'react';
import { Link } from 'react-router-dom';

import './top-header.scss';

/* eslint-disable-next-line */
export interface TopHeaderProps {}

export const TopHeader = (props: TopHeaderProps) => {
  return (
    <div className="container flex font-bold h-12 mx-auto">
      <div className="my-auto">
        <p>
          Hi <a className="primary">Sign in</a> or <a className="primary">Register</a>
        </p>
      </div>
      <div className="my-auto flex-1 flex justify-center">
        <span className="mx-2">Daily Deals</span>
        <span className="mx-2">Sell</span>
        <span className="mx-2">Help &amp; Contact</span>
      </div>
      <div className="my-auto flex" style={{flex: ".2 1"}}>
        <img src="/assets/icon/gbr.png" alt="" />
        <span>&#163;GBP</span>
      </div>
      <div className="my-auto flex">
        <div className="flex">
          <img src="/assets/icon/icons-bag.png" alt="" />
          <span
            className="bg-primary px-1 px-2 relative rounded-full text-sm text-white"
            style={{ top: '-10px', left: '-10px' }}
          >
            6
          </span>
        </div>
        <span>Your bag:&#163;3.99</span>
      </div>
    </div>
  );
};

export default TopHeader;
