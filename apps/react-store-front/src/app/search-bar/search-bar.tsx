import React, { Component } from 'react';

import './search-bar.scss';

/* eslint-disable-next-line */
export interface SearchBarProps {}

export class SearchBar extends Component<SearchBarProps> {
  render() {
    return (
      <div className="bg-gray h-full inline-flex relative rounded-l-full rounded-r-full px-2">
        <img className="my-auto" src="assets/icon/icons-search-white.png" alt="" style={{height: '20px'}}/>
        <input className="bg-gray h-8 my-auto outline-none px-1 rounded-l-full" type="text" name="searchBar" id=""/>
        <img className="my-auto"src="/assets/icon/icons-close-small-white.png" style={{height: '20px'}}/>
      </div>
    );
  }
}

export default SearchBar;
