import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks }from './NavbarElements.js'


const Navbar
 = () => {
  return (
    <>
      <Nav>
          <NavbarContainer>
              <NavLogo to='/'>
                  Holla
              </NavLogo>
              <MobileIcon>
                <FaBars/>
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to="about"> 
                      About
                  </NavLinks>
                </NavItem>
              </NavMenu>
          </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
