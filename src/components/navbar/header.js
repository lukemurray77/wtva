import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"> QUIZSITE </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/create"> Create </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/play"> Play </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

/*
// <Navbar collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Toggle />
//           <div className="sd-logo">
//           </div>
//         </Navbar.Header>
//         <Navbar.Collapse>
//           <div>
//             <Nav>
//               <NavItem><Link to="/"><Button>HOME</Button></Link></NavItem>
//               <NavItem><Link to="/play"><Button>PLAY</Button></Link></NavItem>
//         y      <NavItem><Link to="/create"><Button>CREATE</Button></Link></NavItem>
//             </Nav>
//           </div>
//         </Navbar.Collapse>
//         <hr className="divider"/>
//         <hr className="divider2"/>
//
//       </Navbar> */
