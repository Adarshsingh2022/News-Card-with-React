import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Header from './Header'

ReactDOM.render(
  <>
    <Header/>
    <Card 
    imgSrc="https://images.indianexpress.com/2021/11/new-zealand-vs-australia-prediction.jpg?resize=600,334" 
    title="New Zealand-Australia T20I series cancelled"
    content="Australia beat New Zealand by eight wickets in the final of the Twenty20 World Cup last November 
    and the rivals were expected to play in Napier from March 17-20."
    />

    <Card
    imgSrc="https://images.indianexpress.com/2022/02/Untitled-design-43.jpg?resize=600,334"
    title="Tearful Juan Martin del Potro nears retirement"
    content="Argentinian tennis player Juan Martin del Potro lost in what appeared to be a farewell match in front of home fans at the Argentina Open tournament."
    />

    <Card 
    imgSrc="https://images.indianexpress.com/2022/02/Untitled-design-41.jpg"
    title="The Asian American pipeline in figure skating"
    content="Chin won the national title in 1985. She was a happy-go-lucky teenager back then, but savvy enough to realize that the winners who had come before her had not looked like her, that few people in the rinks where she skated ever did."
    />

    <Card
     imgSrc="https://images.indianexpress.com/2022/02/Untitled-design-42.jpg?resize=600,334"
     title="Cristiano Ronaldo’s dry spell"
     content="Ronaldo didn't even start the 1-1 draw at last-place Burnley on Tuesday, only appearing as a second-half substitute and failing to score for a fifth straight game."
    />
  </>,
 document.getElementById('root')
);



