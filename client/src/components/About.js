import React from 'react'
import Container from 'react-bootstrap/Container'

function About() {
  return (
    <Container style={{ padding: "40px" }} className="text-center">
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