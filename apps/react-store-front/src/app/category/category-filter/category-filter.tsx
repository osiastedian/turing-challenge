import React from 'react';

import './category-filter.scss';
import ColorPicker from '../../shared/color-picker/color-picker';

/* eslint-disable-next-line */
export interface CategoryFilterProps {}

export const CategoryFilter = (props: CategoryFilterProps) => {
  return (
    <div className="shadow filter flex flex-col">
      <div className="border p-4">
        <span className="font-semibold">Filter 486 Items</span>
        <ul>
          <li className="flex">
            <img
              className="cursor-pointer my-auto"
              src="/assets/icon/icons-close-small-black.png"
              alt=""
              style={{ height: '20px' }}
            />
            <span className="my-auto text-gray-500 text-sm">Gender: </span>
            <span className="my-auto ml-1">Woman</span>
          </li>
          <li className="flex">
            <img
              className="cursor-pointer my-auto"
              src="/assets/icon/icons-close-small-black.png"
              alt=""
              style={{ height: '20px' }}
            />
            <span className="my-auto text-gray-500 text-sm">Category: </span>
            <span className="my-auto ml-1">Dresses</span>
          </li>
        </ul>
      </div>
      <div className="bg-white flex-1">
        <div className="flex flex-col p-4">
          <span className="font-bold bg-label">Color</span>
          <ColorPicker />
        </div>
        <div className="flex flex-col p-4">
          <span className="font-bold bg-label">Sizes</span>
          <div className="size-button-container">
            <button className="size-button rounded">XS</button>
            <button className="size-button rounded">S</button>
            <button className="size-button rounded">M</button>
            <button className="size-button rounded">L</button>
            <button className="size-button rounded">XL</button>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <span className="font-bold bg-label">Price</span>
          <div className="size-button-container" />
        </div>
        <div className="flex flex-col p-4">
          <span className="font-bold bg-label">Brand</span>
          <div className="size-button-container" />
        </div>
      </div>
      <div className="border flex justify-around p-4">
        <button className="font-bold px-5 py-1 rounded-l-full rounded-r-full text-white bg-primary">
          Apply
        </button>
        <button className="flex primary">
          <img
            className="my-auto"
            src="/assets/icon/icons-close-small-red.png"
            alt=""
          />
          Clear All
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
