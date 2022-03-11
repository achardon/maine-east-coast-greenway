import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

function About() {
  return (
    <Container style={{ padding: "40px" }} className="text-center">
      {/* <Card style={{ width: '70rem'}} className="text-center">
          <Card.Title>About the East Coast Greenway</Card.Title>
        <Card.Img variant="top" src="https://images.radio.com/aiu-media/DR-Canal-Trail-NJ-2e67a2f7-299b-4fa6-a746-1666618aed92.jpg?width=800" />
        <Card.Body>
          <Card.Text>
            The East Coast Greenway is a route for bicyclists, walkers, runners, and other outdoor enthusiasts that stretches from Maine to Florida over 3,000 miles. It is the longest connected biking route in the United States. The East Coast Greenway Alliance is the nonprofit that leads the development of the trail network.
          </Card.Text>
        </Card.Body>
      </Card> */}

      <h1>About the East Coast Greenway</h1>
      <img
        src="https://cdn.branchcms.com/EVYv12OXqx-1026/images/trails/trail-system/2017-10-10-11-large.18.46.jpg"
        alt="biker on route"
        height="700px"
        style={{ padding: "40px" }}
      ></img>
      <h5>
        The East Coast Greenway is a route for bicyclists, walkers, runners, and
        other outdoor enthusiasts that stretches from Maine to Florida over
        3,000 miles. It is the longest connected biking route in the United
        States. The East Coast Greenway Alliance is the nonprofit that leads the
        development of the trail network.
      </h5>
      <h5>
        This app focuses on the Maine portion of the East Coast Greenway. Use
        this app to explore the places along the route in Maine and decide where
        you want to plan your adventure. Create an account in order to plan your
        trip using our planning tool. Please note that this app uses the complementary coastal route to plan a trip and to calculate mileages.
      </h5>
    </Container>
  );
}

export default About