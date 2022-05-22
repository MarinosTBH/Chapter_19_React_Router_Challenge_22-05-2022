import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import './Styles/MovieRoute.css'
import {Carousel} from "react-bootstrap";
import Nav from './Nav'


const MovieDescription = ({Films}) => {

const {id} = useParams()
console.log(id) 

const [movieDesc, setmovieDesc]=useState({})

useEffect(() =>
 {
    setmovieDesc(Films.find(f=> f.id == id))


 }, []  )
console.log(movieDesc)

  return (

    <div>
        <Nav></Nav>
        <div className="Carousel-container">
        <Carousel>
        <Carousel.Item>
        <img 
        style={{height:400}}
        className="d-block w-100"
        src={movieDesc.poster}
        alt={movieDesc.id}
        />

        <h3>{movieDesc.title}</h3>
        <p>{movieDesc.description}</p>

        </Carousel.Item>


        <Carousel.Item>
        <ReactPlayer url={movieDesc.trailer} />


        <Carousel.Caption>
        <h3>Trailer</h3>
        </Carousel.Caption>
        </Carousel.Item>


        </Carousel>
        </div>

</div>
  )
}

export default MovieDescription