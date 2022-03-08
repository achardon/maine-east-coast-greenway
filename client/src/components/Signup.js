import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


function Signup( {setUser} ) {

    const [form, setForm] = useState({
      username: "",
      password: "",
      password_confirmation: ""
    });

  let navigate = useNavigate();

  function handleSignIn() {
    navigate(`/log_in`);
  }

  function handleChange(e) {
    setForm({...form,
    [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(data => setUser(data))
        navigate(`/`);
      } 
      else {
        r.json().then(error => alert(error.errors))
      }
    })
  }

  return (
    <Container style={{ padding: "40px" }}>
      <h1>Create Account</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
            value={form.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={form.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={form.password_confirmation}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>

      <Container style={{ padding: "40px" }} className="text-center">
        <h3 style={{ padding: "10px" }}>Already have an account?</h3>
        <Button onClick={handleSignIn} variant="info">
          Log In
        </Button>
      </Container>
    </Container>
  );
}

export default Signup