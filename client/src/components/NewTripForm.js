import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function NewTripForm( { createTrip } ) {

    const [newTrip, setNewTrip] = useState({
        name: "",
        start_date: "",
        end_date: "",
        days: []
    })

    function handleChange(e) {
        setNewTrip({...newTrip,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        createTrip(newTrip)
    }

  return (
    <Container style={{ padding: "40px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name of Trip</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Trip Name"
            value={newTrip.name}
            onChange={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="start_date"
            placeholder="Start Date"
            value={newTrip.start_date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="end_date"
            placeholder="End Date"
            value={newTrip.end_date}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Create Trip
        </Button>
      </Form>
    </Container>
  );
}

export default NewTripForm