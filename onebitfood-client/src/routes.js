import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './screens/home';
import Restaurants from './screens/restaurants';
import ShowRestaurant from './screens/show_restaurant';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/restaurants' component={Restaurants} />
      <Route exact path='/restaurants/:id' component={ShowRestaurant} />
    </Switch>
  </BrowserRouter>
)

export default Routes;