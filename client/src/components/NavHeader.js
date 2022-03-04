import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavHeader() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">East Coast Greenway</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="explore">Explore</Nav.Link>
        <Nav.Link href="my_trips">My Trips</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavHeader