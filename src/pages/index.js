import React from "react"
import { graphql } from "gatsby";
import styled from "styled-components"

import DefaultLayout from "../components/Layouts/Default"
import SEO from "../components/SEO/seo"
import TileContentBlock from '../components/ContentBlocks/TileContentBlock';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const HeroHeading = styled.div`
  position: absolute;
  display: flex;
  h1{
    color: white;
    text-align: center;
    margin: 20px;
  }
`;

const SecondaryHeading = styled.h2`
  text-align: center;
`;

const IndexPage = ({ data }) => {
  const { hero_heading, hero_image, headding, tile_content_blocks } = data.prismicHomepage.data;
  return (
    <DefaultLayout>
      <SEO title={hero_heading.text} keywords={[`gatsby`, `application`, `react`]} />
      <HeroHeading><h1>{hero_heading.text}</h1></HeroHeading>
      <img src={hero_image.url} alt={hero_image.alt} />
      <SecondaryHeading>{headding.text}</SecondaryHeading>
      <FlexContainer>
        {tile_content_blocks.map(block => 
          <TileContentBlock key={block.cb_title.text} block={block} />
        )}
      </FlexContainer>
    </DefaultLayout>
  )
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    prismicHomepage {
      id
      data{
        hero_heading {
          html
          text
        }
        hero_image {
          alt
          copyright
          url
        }
        headding {
          html
          text
        }
        tile_content_blocks {
          cb_title {
            html
            text
          }
          cb_tile_image {
            alt
            copyright
            url
          }
          cb_description {
            html
            text
          }
        }
      }
    }
  }
`;
