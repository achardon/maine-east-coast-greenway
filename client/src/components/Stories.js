import React from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import StoryCard from './StoryCard';
import { useState, useEffect } from 'react'

function Stories() {

  const [stories, setStories] = useState([])

  const sampleStories = [
    {id: 1, name: "Alessandra", date: "August 14, 2022", narrative: "This is day 1 of our wedding bike trip! Today we biked from Rye, NH to Kittery, ME. We got multiple family members involved and had 10 people riding out of the starting point. Beautiful day with a great lunch spot on the ocean eating huge sandwiches on rocks."},
    {id: 2, name: "Lorenzo", date: "August 14, 2022", narrative: "That was a really good sandwich! I liked getting wet after lunch in the little tide pools."},
    {id: 3, name: "Cassidy", date: "August 14, 2022", narrative: "I fell asleep right away and missed the first part of lunch. Lorenzo keeps poking my eye. Maybe he will stop."},
    {id: 4, name: "Lorenzo", date: "August 15, 2022", narrative: "Today we are starting with just Papa, Ed, me, and Cassidy. We got to have a nice breakfast at a picnic table outside of a restaurant and we got some treats!"},
    {id: 5, name: "Cassidy", date: "August 16, 2022", narrative: "Today is Flo's birthday! We found her on the trail in the forest and everyone was very excited to see each other. Then we got to give Flo some presents!"}
  ]

  useEffect(() => {
    setStories(sampleStories)
  }, [])


  //add a filter bar at the top for name, date, or keyword

  return (
    <Container style={{ padding: "40px" }} className="text-center">
      <h1>Stories</h1>
      {stories.map((story) => {
        return (
            <StoryCard story={story} key={story.id} />
        );
      })}
    </Container>
  );
}

export default Stories

//picture gallery
//links to blogs or stories
//filter or sort by name, date, etc.