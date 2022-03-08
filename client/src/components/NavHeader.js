import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";


function NavHeader( {user, setUser} ) {

  let navigate = useNavigate()

  function handleLogIn() {
    navigate(`/log_in`)
  }

  function handleLogOut() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(setUser(null))
  }

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

        <Navbar.Collapse className="justify-content-end">
          {/* need to eventually change this to show log in button when no one is logged in */}
          {user? <Navbar.Text>Signed in as: <a href="#login">{user.username}</a></Navbar.Text> : null}
          <div style={{padding: "10px"}}>
            {user? <Button onClick={handleLogOut}>Log Out</Button> : <Button onClick={handleLogIn}>Log In</Button>}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader