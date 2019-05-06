import React, { Component } from 'react';
import { Field, Control, Input, Icon } from 'rbx';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRestaurants } from '../../actions/restaurant';
import "../../styles/search_box.scss";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = { search: "" }
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  search = (event) => {
    if(event.key === "Enter") {
      this.props.searchRestaurants(this.state.search);
    }
  }

  render() {
    return(
        <div className="search-box">
            <Field align="center">
            <Control iconRight>
            <Input  type="text" placeholder="Buscar Restaurantes" value={this.state.search} onChange={this.handleChange}
                    onKeyPress={this.search} />
                <Icon align="right">
                <FaSearch />
                </Icon>
            </Control>
            </Field>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ searchRestaurants }, dispatch);

export default connect(null, mapDispatchToProps)(SearchBox);