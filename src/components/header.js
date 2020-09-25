import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import Logo from "../images/Logo.png"
import Carro from "../images/cart.png"
import { CartContext } from "../context"

const Header = () => {
  const props = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="platzi.com">Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img src={Carro} alt="carro" />
                {props.cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
