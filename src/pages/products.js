import React from "react"
import { graphql } from "gatsby";
import styled from "styled-components"

import DefaultLayout from "../components/Layouts/Default"
import SEO from "../components/SEO/seo"
import ProductBlock from '../components/ProductBlocks/ProductBlock';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductsPage = ({data}) => {
  const { edges } = data.allPrismicProduct
  return (
    <DefaultLayout>
      <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Products</h1>
      <hr />
      <FlexContainer>
        { edges.map(product => <ProductBlock key={product.node.id} product={product} />) }
      </FlexContainer>
    </DefaultLayout>
  )
} 

export default ProductsPage

export const query = graphql`
  query allProductsQuery {
    allPrismicProduct {
      edges {
        node {
          id
          slugs
          data {
            title {
              html
              text
            }
            description {
              html
              text
            }
            images{
              hero_image {
                alt
                copyright
                url
              }
              tile_image {
                alt
                copyright
                url
              }
            }
          }
        }
      }
    }
  }
`;
