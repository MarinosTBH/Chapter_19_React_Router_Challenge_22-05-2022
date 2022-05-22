
import React from 'react'
import Movies from './Movies';
import {useState, useEffect} from 'react';


  const MovieContainer = ({Films, Input, Rating}) => {
  const [FiltredFilms, setFiltredFilms]=useState(Films)
    useEffect(()=> {
    setFiltredFilms(Films.filter((film)=> 
      film.name.toLowerCase().includes(Input.toLowerCase()) && 
      
  Rating ===0 ? Films : film.rating === Rating 
    )
    );
    //(Nbre stars strictement = Rating)
    //film.rating >= Rating
    
   },[Input, Rating, Films]);
 
      return <Movies Films={FiltredFilms}/>;
  
};

export default MovieContainer;