import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './screens/home';
import Restaurants from './screens/restaurants'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/restaurants' component={Restaurants} />
    </Switch>
  </BrowserRouter>
)

export default Routes;