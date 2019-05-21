import React, {Component} from 'react';
import { Column } from "rbx";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Restaurant from "./restaurant.js";
import { loadRestaurants } from "../../actions/restaurant"; 

class ListRestaurants extends Component {
  componentWillMount() {
    this.props.loadRestaurants();
  }

  componentDidUpdate(prevProps) {
    if (this.props.address !== prevProps.address) {
      this.props.loadRestaurants(this.props.address);
    }
  }

  render() {
    return (
      <div className="restaurants-list">
        <h2 className="title is-size-4">Restaurantes</h2>

        <Column.Group multiline gapSize={2}>
          {
            this.props.restaurants.map(restaurant => {
              return <Restaurant {...restaurant}/>
            })
          }
        </Column.Group>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  restaurants: store.restaurantsState.restaurants,
  address: store.addressState.address
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadRestaurants }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListRestaurants);