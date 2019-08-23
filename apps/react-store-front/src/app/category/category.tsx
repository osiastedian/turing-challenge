import React from 'react';

import './category.scss';
import CategoryHeader from './category-header/category-header';
import CategoryFilter from './category-filter/category-filter';
import CategoryItem from './category-item/category-item';

/* eslint-disable-next-line */
export interface CategoryProps {}

export const Category = (props: CategoryProps) => {
  const items = Array(11).fill(1);
  return (
    <div className="container mx-auto p-2">
      <CategoryHeader></CategoryHeader>
      <div className="category-items">
        <CategoryFilter></CategoryFilter>
        {
          items.map((item, index) => <CategoryItem key={index} showQuickView={false}></CategoryItem>)
        }
      </div>
    </div>
  );
};

export default Category;
