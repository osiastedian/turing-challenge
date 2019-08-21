import React, { Component } from 'react';

import './main-header.scss';
import SearchBar from '../search-bar/search-bar';

/* eslint-disable-next-line */
export interface MainHeaderProps {}

export class MainHeader extends Component<MainHeaderProps> {
  render() {
    return (
      <div className="bg-dark py-2">
        <div className="container flex mx-auto text-white">
          <div className="font-bold text-3xl text-primary tracking-widest">
            <span>SHOPMATE</span>
          </div>
          <div className="flex flex-1 justify-center text-center">
            <ul className="font-semibold inline-flex my-auto">
              <li className="mx-2">Women</li>
              <li className="mx-2">Men</li>
              <li className="mx-2">Kids</li>
              <li className="mx-2">Shoes</li>
              <li className="mx-2">Brands</li>
            </ul>
          </div>
          <div className="my-auto mx-2">
            <SearchBar />
          </div>
          <div className="flex mx-2 ">
            <div className="flex my-auto">
              <img src="/assets/icon/icons-bag-white.png" alt="" />
              <span
                className="bg-white font-black text-primary px-1 px-2 relative rounded-full text-sm text-white"
                style={{ top: '-10px', left: '-10px' }}
              >
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
