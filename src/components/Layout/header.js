import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


function renderNavItems(nav){
  console.log(nav);
  
  return nav.map(navItem => {
    return <Link 
      key={navItem.node.id}
      to={`/${navItem.node.slugs[0]}`}
      style={{
        color: `white`,
        textDecoration: `none`,
        padding: '20px'
      }}
      >{navItem.node.data.title.text}</Link>
  });
}

const Header = ({ siteTitle, nav }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {renderNavItems(nav)}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
