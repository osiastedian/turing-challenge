import React from 'react';

import './app.scss';

import { Route, Link } from 'react-router-dom';
import TopHeader from './top-header/top-header';
import MainHeader from './main-header/main-header';
import Category from './category/category';

export const App = () => {
  return (
   <div>
     <TopHeader></TopHeader>
     <MainHeader></MainHeader>
     <div className="content">
     <Category></Category>
     </div>
   </div>
  );
};

export default App;
