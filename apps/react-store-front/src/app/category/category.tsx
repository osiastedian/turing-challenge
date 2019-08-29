import React from 'react';

import './category.scss';
import CategoryHeader from './category-header/category-header';
import CategoryFilter from './category-filter/category-filter';
import CategoryItem from './category-item/category-item';
import CategoryLowerBanner from './category-lower-banner/category-lower-banner';
import SubscriptionBar from '../shared/subscription-bar/subscription-bar';
import Footer from '../shared/footer/footer';

/* eslint-disable-next-line */
export interface CategoryProps {}

export const Category = (props: CategoryProps) => {
  const items = Array(11).fill(1);
  return (
    <div className="container mx-auto p-2">
      <CategoryHeader></CategoryHeader>
      <div className="category-items mb-3">
        <CategoryFilter></CategoryFilter>
        {
          items.map((item, index) => <CategoryItem key={index} showQuickView={false}></CategoryItem>)
        }
      </div>
      <CategoryLowerBanner></CategoryLowerBanner>
    </div>
  );
};

export default Category;
