
import React from 'react'
import ReactStars from "react-rating-stars-component";

import { Link } from 'react-router-dom';

const Movies = ({Films}) => {
  // console.log(Films)
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', flexWrap:'wrap', width:'70%', margin:'50px auto'}}>

      {Films.map (film =>  {
 
 return (

<div  key={film.id} >

   <Link to={`MovieDescription/${film.id}`} >

      <img src={film.img} alt={film.name} height={200} width={200}/>

      <h5> {film.name} </h5>

   </Link>


<ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={film.rating}
  />,

</div>

)

      }
       )} 


    </div>
    
  )
}

export default Movies;