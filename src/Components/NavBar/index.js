import React from "react";
import {FormControl,Nav,Navbar,NavDropdown,Button,Form}from "react-bootstrap";
import "./styles.css";
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img
            // src="https://img.icons8.com/fluent/2x/exam.png"
            src="https://img.icons8.com/ios-filled/2x/github.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search or jump to"
            className="mr-sm-0"
          />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Navbar bg="dark"></Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Pull requests</Nav.Link>
            <Nav.Link href="#">Issues</Nav.Link>
            <Nav.Link href="#">Marketplace</Nav.Link>
            <Nav.Link href="#">Explore</Nav.Link>
          </Nav>
          <Navbar.Brand href="/home">
            <img
              // src="https://img.icons8.com/fluent/2x/exam.png"
              src="https://img.icons8.com/carbon-copy/2x/bell--v2.gif"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <NavDropdown title="+" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              New repository
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Import repository
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">New gist</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              New organization
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">New issue</NavDropdown.Item>
          </NavDropdown>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
