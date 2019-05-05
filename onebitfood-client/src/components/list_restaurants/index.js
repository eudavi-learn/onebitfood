import React, {Component} from 'react';
import { Column } from "rbx";

import Restaurant from './restaurant';

class ListRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          'name': 'example 1',
          'delivery_tax': '5',
          'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
          'category_title': 'Cozinha japonesa',
          'review': '4.9'
        },
        {
          'name': 'example 2',
          'delivery_tax': '10',
          'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
          'category_title': 'Cozinha mineira',
          'review': '4.9'
        },
        {
          'name': 'example 3',
          'delivery_tax': '15',
          'image_url': 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
          'category_title': 'Cozinha vegana',
          'review': '4.9'

        }
      ]
    };
  }

  render() {
    return (
      <div className="restaurants-list">
        <h2 className="title is-size-4">Restaurantes</h2>

        <Column.Group multiline gapSize={2}>
          {this.state.restaurants.map(restaurant => {
            return <Restaurant {...restaurant}/>
          })}
          </Column.Group>
      </div>
    )
  }
}

export default ListRestaurants;