import React from 'react';
import styled from "styled-components"

const ContentBlock = styled.div`
flex-basis: 450px;
border: solid gray 1px;
  padding: 20px;
  margin: 5px;
`;

const TileContentBlock = ({ block }) => {
  return (
    <ContentBlock>
      <img src={block.cb_tile_image.url} alt={block.cb_tile_image.alt} />
      <h3>{block.cb_title.text}</h3>
      <p>{block.cb_description.text}</p>
    </ContentBlock>
  )
}

export default TileContentBlock;
