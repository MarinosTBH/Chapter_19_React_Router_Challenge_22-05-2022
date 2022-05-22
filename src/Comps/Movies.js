
import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Card,Button} from "react-bootstrap"; 

import { Link } from 'react-router-dom';

const Movies = ({Films}) => {
  // console.log(Films)
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', flexWrap:'wrap', width:'70%', margin:'50px auto'}}>

{Films.map (film =>  {
 
 return (

      <Card style={{ width: '18rem', margin:10, padding:10 }} bg="light"  key={film.id} >

        <Card.Img variant="top" src={film.poster } alt={film.name} height={200} width={200}/>

        <Card.Body>
          <Card.Title>{film.name}</Card.Title>
          <Card.Text>
          Donec nisi ex, bibendum non finibus et, lobortis finibus orci. Aliquam a augue ornare,
           efficitur ipsum vulputate, volutpat velit. Praesent vehicula, ... 
            <Link to={`MovieDescription/${film.id}`} >

            <span><br></br><Button src={film.img} alt={film.name} height={200} width={200} >Show More</Button></span>

          </Link>
          </Card.Text>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            edit={false}
            value={film.rating}
          />,
        </Card.Body>
      </Card>

      )

      }
      )} 


    </div>
    
  )
}

export default Movies;