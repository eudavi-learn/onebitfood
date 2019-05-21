import React from 'react';
import { Title, Column, Box, Image } from 'rbx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from "../../actions/modal";

import "../../styles/product.scss";

const CategoryProducts = (props) => (
  <div id="product">
    <Title size="5">{props.title}</Title>
    <Column.Group gapSize={2} multiline >
      {props.products.map((product, i) => {
        return (
            <Column key={i} size="4">
              <Box>
                <a href="#" onClick={() => props.showModal('ADD_PRODUCT', {'product': product, 'restaurant': props.restaurant})}>
                  <Column.Group>
                    <Column size="6" offset={1}>
                      <Title size="6">{product.name}</Title>
                      <Title subtitle size="6">{product.description}</Title>
                      <span className="dashed_box">Preço ${product.price}</span>
                    </Column>
                    <Column size="two-fifths">
                      <Image src={product.image_url} width="50%" />
                    </Column>
                  </Column.Group>
                </a>
              </Box>
            </Column>
        )
      })}
    </Column.Group>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({ showModal }, dispatch);

export default connect(null, mapDispatchToProps)(CategoryProducts);