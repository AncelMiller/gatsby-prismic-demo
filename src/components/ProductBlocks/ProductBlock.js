import React from 'react';
import styled from "styled-components"

const ProductBlock = styled.div`
  flex-basis: 290px;
  border: solid gray 1px;
  padding: 20px;
  margin: 10px 5px;
`;

const TileProductBlock = ({ product }) => {
  return (
    <ProductBlock>
      <img src={product.node.data.images[0].tile_image.url} alt={product.node.data.images[0].tile_image.alt} />
      <h2>{product.node.data.title.text}</h2>
      <p>{product.node.data.description.text}</p>
    </ProductBlock>
  )
}

export default TileProductBlock;
