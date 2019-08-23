import React, { useState, Component } from 'react';

import './category-item.scss';

/* eslint-disable-next-line */
export interface CategoryItemProps {
  showQuickView: boolean;
}

export class CategoryItem extends Component<CategoryItemProps> {
  constructor(props: CategoryItemProps) {
    super(props);
    this.state = {...props};
  }

  render() {
    const { showQuickView } = this.state as Readonly<CategoryItemProps>;
    return (
      <div className="bg-white flex flex-col p-5 relative shadow">
        <div className="flex-grow relative">
          <button
            className="h-full mx-auto block"
            onClick={() =>
              this.setState({ ...this.state, showQuickView: true })
            }
          >
            <img src="/assets/images/images-shirt5.png" alt="" />
          </button>
          <span className="absolute mr-auto px-3 text-white top-0 bg-primary">
            HOT
          </span>
        </div>
        <span className="mx-auto text-black font-bold">
          Men's Knitwear Offers
        </span>
        <button
          className=" font-bold mx-auto px-3 py-1 text-primary rounded-l-full
        rounded-r-full hover-bg-primary hover-text-white hover-buy-now"
        >
          <span className="price">$123</span>
        </button>
        <div
          className="absolute align-middle bottom-0 flex flex-col justify-center left-0 p-5 right-0 top-0 white-transparent"
          hidden={!showQuickView}
          onClick={() => this.setState({ ...this.state, showQuickView: false })}
        >
          <img
            className="m-auto"
            src="/assets/icon/icons-heart-red.png"
            alt=""
          />
          <button className=" font-bold mx-auto px-3 py-1 rounded-l-full rounded-r-full bg-primary text-white ">
            <span className="price">Quick View</span>
          </button>
        </div>
      </div>
    );
  }
}

export default CategoryItem;
