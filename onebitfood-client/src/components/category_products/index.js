import React from 'react';
import { Title, Column, Box, Image } from 'rbx';
import "../../styles/product.scss";

const CategoryProducts = (props) => (
  <div id="product">
    <Title size="5">{props.title}</Title>
    <Column.Group gapSize={2} multiline>
      {props.products.map((product, i) => {
        return  <Column size="6" key={i}>
                  <Box>
                    <Column.Group>
                      <Column size="three-fifths">
                        <Title size="6">{product.name}</Title>
                        <p>{product.description}</p>
                        <span class="dashed_box">Preço ${product.price}</span>
                      </Column>
                      <Column size="two-fifths">
                        <Image src={product.image_url} width="50%" />
                      </Column>
                    </Column.Group>
                  </Box>
                </Column>
      })}
    </Column.Group>
  </div>
);

export default CategoryProducts;