import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderSection = styled.header`
  background: #0076a3;
  margin-bottom: 0.2rem;
  padding: 1rem;
  h1.logo {
    margin: auto;
    text-align: center;
  }
`;

const Nav = styled.div`
  margin: auto;
  max-width: 960px;
  display: flex;
`;

const LinkItem = styled.div`
  a {
    padding: 15px 30px;
    color: white;
    text-decoration: none;
  }
`;

function renderNavItems(nav){
  return nav.map(navItem => {
    return (
    <LinkItem key={navItem.navigation_item.id}>
      <Link to={navItem.navigation_item.document[0].data.link}>{navItem.navigation_item.document[0].data.title.text}</Link>
    </LinkItem>
  )});
}

const Header = ({ siteTitle, nav }) => (
  <HeaderSection>
    <h1 className="logo">
        <LinkItem>
          <Link to="/" >{siteTitle}</Link>
        </LinkItem>
    </h1>
    <Nav>  
      {renderNavItems(nav)}
    </Nav>
  </HeaderSection>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
