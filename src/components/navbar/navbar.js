import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../App.css";

const NavBar = () => {
    return(
      <Navbar className="justify-content-end nav" expand="sm" fixed="top">
        <Nav className="flex-row " defaultActiveKey="/home" id="mainNav">
          <Nav.Item>
            <Nav.Link className="navlink" href="/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navlink" href="#about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navlink" href="#skills">
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navlink" href="#portfolio">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navlink" href="#contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }

export default NavBar;