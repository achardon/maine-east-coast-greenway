import React from 'react'
import Container from 'react-bootstrap/Container'
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

    </Container>
  )
}

export default Explore