import React from 'react'
import {Container} from '../../GlobalStyles'
import { Nav, NavbarContainer, NavIcon, NavLogo, NavLink, SignButton } from './Navbar.elements'
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <>
    <Nav>
       <NavLogo to="/">
        <NavIcon></NavIcon>
    </NavLogo> ULTRA
<NavbarContainer>
 <NavLink to="/">Home</NavLink>
 <NavLink to="/">Resources</NavLink>
 <NavLink to="/">Products</NavLink>
 <SignButton to="/">Sign up</SignButton>
</NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar