import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PlaceCard from './PlaceCard'

function Explore( {places, accommodations} ) {


  return (
    <Container style={{ padding: '40px' }} className="text-center">
        <h1>Explore</h1>

        <Container>
            <Col>
                <Row>
                    {places.map(place => <PlaceCard key={place.id} place={place} accommodations={accommodations}/>)}
                </Row>
            </Col>
        </Container>
        {/* <Card style={{ width: '30rem' }}>
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
                Bangor is a growing city with a small-town feel that was recently named one of the coolest towns in America and a top place to live. 
                </Card.Text>
                <Button variant="primary">Tell Me More!</Button>
            </Card.Body>
        </Card> */}

    </Container>
  )
}

export default Explore