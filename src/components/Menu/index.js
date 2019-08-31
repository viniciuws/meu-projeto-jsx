import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { isLoggedIn, setLoggedIn } from '../../utils/fake-login'
import './style.css';

const NavLinkRouter = props => {
  return <Link className="nav-link text-white" {...props} />
}

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onLogoutClick = () => {
    setLoggedIn(false);
    this.props.history.push('/')
  }
  renderLogout = () => {
     if(!isLoggedIn()){
      return null
     }
     return (
      <NavItem>
        <NavLink href="#" onClick={this.onLogoutClick}>Sair</NavLink>
      </NavItem>
    )
  }
  render() {
    return (
      <Navbar color="warning" light expand="md">
        <NavLinkRouter to="/">Home</NavLinkRouter>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLinkRouter to="/tasks">Tasks</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/posts">Posts</NavLinkRouter>
            </NavItem>
            <NavItem>
              <NavLinkRouter to="/about">About</NavLinkRouter>
            </NavItem>
            {this.renderLogout()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Menu);