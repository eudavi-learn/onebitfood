import React, { Component, Fragment } from 'react';
import { Title, Box, Column, Image, Icon } from "rbx";
import { FaStar } from "react-icons/fa";

import api from "../../services/api";

import CategoryProducts from "../../components/category_products";

import "../../styles/restaurant.scss";

class ShowRestaurant extends Component {
  state = {
    restaurant: {}
  }

  componentWillMount() {
    api.getRestaurant(this.props.match.params.id).then(response => {
      this.setState({ restaurant: response.data.restaurant })
    });
  }

  render() {
    return  <Fragment>
              <Title size="4">{this.state.restaurant.name}</Title>
              <Box>
                <Column.Group>
                  <Column size={3}>
                    <Image src={this.state.restaurant.image_url} />
                  </Column>
                  <Column size={7}>
                    <p>{this.state.restaurant.description}</p>
                    <footer>
                      <span className="dashed_box">Entrega ${this.state.restaurant.delivery_tax}</span>
                      <span>
                        <Icon size="medium" color="warning">
                          <FaStar />
                        </Icon>
                        <span className="has-text-warning has-text-weight-bold">{this.state.restaurant.review || 0}</span>
                      </span>
                    </footer>
                  </Column>
                </Column.Group>
              </Box>

              {this.state.restaurant.product_categories &&
                this.state.restaurant.product_categories.map(category => {
                  return <CategoryProducts restaurant={this.state.restaurant} {...category} />
                })
              }
            </Fragment>
  }
}

export default ShowRestaurant;