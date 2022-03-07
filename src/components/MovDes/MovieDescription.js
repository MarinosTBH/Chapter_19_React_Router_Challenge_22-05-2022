import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import './MovieDesc.css'


const MovieDescription = ({Films}) => {

const {id} = useParams()
// console.log(id) useParams: Pour connaitre l'id

const [movieDesc, setmovieDesc]=useState({})

useEffect(() =>
 {
    setmovieDesc(Films.find(f=> f.id == id))


 }, []  )
// console.log(movieDesc)

  return (

    <div className='Desc'>

         <h5> {movieDesc.description} </h5>

       <div className='Trailer'>

         <ReactPlayer url={movieDesc.trailer} />

       </div>
    </div>
  )
}

export default MovieDescription