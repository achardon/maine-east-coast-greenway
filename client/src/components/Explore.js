import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import PlaceCard from './PlaceCard'

function Explore( {places, accommodations} ) {

    const [search, setSearch] = useState("")
    const placesToDisplay = places.filter(place => place.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container style={{ padding: '40px' }} className="text-center">

        <h1>Explore</h1>
        
        <Form style={{ padding: '30px' }}>
            <Form.Group>
                <input 
                    type="text" 
                    placeholder="Search Towns..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Form.Group>
        </Form>

        <Container>
            <Col>
                <Row>
                    {placesToDisplay.map(place => <PlaceCard key={place.id} place={place} accommodations={accommodations}/>)}
                </Row>
            </Col>
        </Container>

    </Container>
  )
}

export default Explore