import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function Login() {

  let navigate = useNavigate()

  function handleCreateAccount() {
    navigate(`/signup`)
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Login</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>

      <Container style={{ padding: "40px" }} className="text-center">
        <h3 style={{ padding: "10px" }}>Don't have an account?</h3>
        <Button onClick = {handleCreateAccount} variant="info">
          Create Account
        </Button>
      </Container>
    </Container>
  );
}

export default Login