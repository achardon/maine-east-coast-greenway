import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

function Explore() {
  return (
    <Container style={{ padding: '40px' }} className="text-center">
        <h1>Explore</h1>

        <Stack direction="horizontal" gap={3} style={{ padding: '40px' }}>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://maineguide.com/images/kittery.gif" />
            <Card.Body>
                <Card.Title>Kittery</Card.Title>
                <Card.Text>
                Kittery is the southernmost town of Maine. It was the first incorporated town in Maine in 1647.
                </Card.Text>
                <Button variant="primary">Tell Me More!</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://i0.wp.com/embracesomeplace.com/wp-content/uploads/2021/10/Portland-Maine-09040.jpg?resize=1100%2C734&ssl=1" />
            <Card.Body>
                <Card.Title>Portland</Card.Title>
                <Card.Text>
                Portland is the biggest town on the Maine portion of the route. Is is set on a peninsula that extends into Casco Bay.
                </Card.Text>
                <Button variant="primary">Tell Me More!</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://newengland.com/wp-content/uploads/Bangor_downtown.jpg" />
            <Card.Body>
                <Card.Title>Bangor</Card.Title>
                <Card.Text>
                Bangor, Maine, is a growing city with a small-town feel that was recently named one of the coolest towns in America and a top place to live. 
                </Card.Text>
                <Button variant="primary">Tell Me More!</Button>
            </Card.Body>
        </Card>

        </Stack>
    </Container>
  )
}

export default Explore