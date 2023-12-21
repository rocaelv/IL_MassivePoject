// import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { navLinkss } from '../data/index'
import { NavLink } from 'react-router-dom';

const NavbarKeDua = () => {
  return (
    <div className='sticky-top'>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand> <Link to="/userhome"><img src="src/assets/img/CATERING YUK 1.png" alt="" /></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div className='mx-auto'>
            <input type="search" placeholder='Search' />
            <button><img src="src/assets/img/search.png" alt="" /></button>
            </div>
          <Nav className="ms-auto">
            {navLinkss.map((link) => {
            return ( 
            <div className='nav-link' key={link.id}>
                <NavLink to={link.path}>{link.image}{link.text}</NavLink>
            </div>
            );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavbarKeDua