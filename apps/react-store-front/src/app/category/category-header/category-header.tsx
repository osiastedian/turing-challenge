import React from 'react';

import './category-header.scss';

/* eslint-disable-next-line */
export interface CategoryHeaderProps {}

const bgImage = '/assets/images/Images-modal4.png';

export const CategoryHeader = (props: CategoryHeaderProps) => {
  const categories: string[] = Array(18).fill('Accessories');
  return (
    <div className="category-header flex mb-2 shadow" style={{
      backgroundImage: `url(${bgImage})`
    }}>
      <div className="m-auto w-5/6">
      <h1 className="font-bold font-serif text-6xl tracking-wide header-title" >Mens wear</h1>
      <ul className="font-bold text-white category-list">
        {categories.map((cateogry, index) => (<li key={index}>{cateogry}</li>) )}
      </ul>
      </div>
    </div>
  );
};

export default CategoryHeader;
