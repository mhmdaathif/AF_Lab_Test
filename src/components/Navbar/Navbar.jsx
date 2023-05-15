import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

export default function Navigation() {
  return (
    <div className="navbar-wrapper fixed-top">
      <Navbar bg="primary" variant="primary">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
            <Nav.Link href="/book">Book</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
