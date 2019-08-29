import React from 'react';

import './app.scss';

import { Route, Link } from 'react-router-dom';
import TopHeader from './top-header/top-header';
import MainHeader from './main-header/main-header';
import Category from './category/category';
import SubscriptionBar from './shared/subscription-bar/subscription-bar';
import Footer from './shared/footer/footer';

export const App = () => {
  return (
   <div>
     <TopHeader></TopHeader>
     <MainHeader></MainHeader>
     <div className="content">
     <Category></Category>
     <SubscriptionBar></SubscriptionBar>
     <Footer></Footer>
     </div>
   </div>
  );
};

export default App;
