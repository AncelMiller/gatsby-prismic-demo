import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./_default.css"

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainNavigationMenuQuery {
        prismicNavigationMenu {
          id
          data {
            title
            navigation_items{
              navigation_item {
                id
                document {
                  id
                  data {
                    title {
                      html
                      text
                    }
                    link
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle="Demo" nav={data.prismicNavigationMenu.data.navigation_items} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
