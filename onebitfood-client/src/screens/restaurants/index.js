import React, { Fragment } from 'react';
import ListRestaurants from '../../components/list_restaurants' 
import Categories from '../../components/categories'

const Restaurants = () => (
  <Fragment>
    <Categories />
    <ListRestaurants />
  </Fragment>
);
 
export default Restaurants;