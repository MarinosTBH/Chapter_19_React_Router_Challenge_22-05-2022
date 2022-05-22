
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Comps/Nav";
import MovieContainer from './Comps/MovieList';
import React, { useState } from "react";
import AddMovie from './Comps/AddMovie';
import MovieDescription from "./Comps/MovieRoute";
import Home from"./Home"


import "./Comps/Styles/Home.css"
import p1 from "./Posters/Assassin.jpg"
import p2 from "./Posters/Butterfly man.jpg"
import p3 from "./Posters/Jaws.jpg"
import p4 from "./Posters/Joker.jpg"
import p5 from "./Posters/Jordan Peter.jpg"
import p6 from "./Posters/Lamb.jpg"
import p7 from "./Posters/Moonlight.jpg"
import p8 from "./Posters/Polis.jpg"
import p9 from "./Posters/Spree.jpg"

function Main() {
   ////////////////////////////////////// 
   const [Films, setFilms] = useState([
    {
      id:  1,
      poster: p1,
      name: "Assassin",
      rating: 1,
      trailer: "https://www.youtube.com/watch?v=OzYOEMMg5TM&ab_channel=FilmsActu"
    },
    {
      id:  2,
      poster: p2,
      name: "Butterfly man",
      rating: 2,
      trailer : "https://www.youtube.com/watch?v=1y6mCXg6ji4&ab_channel=DeWarrenne"
    },
    {
      id:  3,
      poster: p3,
      name: "Jaws",
      rating: 2,
      trailer : "https://www.youtube.com/watch?v=YIhxgIZJSbk&ab_channel=ParkCircus"
    },
    {
      id: 4,
      poster: p4,
      name: "Joker",
      rating: 5,
      trailer : "https://www.youtube.com/watch?v=t433PEQGErc&ab_channel=WarnerBros.Pictures"
    },
    {
      id:  5,
      poster: p5,
      name: "US",
      rating: 4,
      trailer : "https://www.youtube.com/watch?v=81M2mgITETY&ab_channel=UniversalPicturesAll-Access"
    },
    {
      id:  6,
      poster: p6,
      name: "Lamb",
      rating: 3,
      trailer : "https://www.youtube.com/watch?v=hnEwJKVWjFM&ab_channel=A24"
    },
    {
      id:  7,
      poster: p7,
      name: "Moonlight",
      rating: 1,
      trailer : "https://www.youtube.com/watch?v=9NJj12tJzqc&ab_channel=A24"
    },
    {
      id : 8,
      poster : p8,
      name: "Polis",
      rating : 4,
      trailer : "https://www.youtube.com/watch?v=jyt-ADeHSrg&ab_channel=STUDIOCANALFrance"
    },
    {
      id : 9,
      poster : p9,
      name: "Spree",
      rating : 4,
      trailer : "https://www.youtube.com/watch?v=cX7V6j7-9_o&ab_channel=RapidTrailer"
    }
  ]);

  ////////////////////////////////////// 


// STATES
/////////////////////////////////////////////////////////////////////////
const[Input,setInput] = useState ("");

const[Rating, setRating] = useState(0);
/////////////////////////////////////////////////////////////////////////

//FUNCTIONS
/////////////////////////////////////////////////////////////////////////
const handleInput = (e) => {
  setInput(e.target.value);
};

const handleRating = (newRating) => {
  setRating(newRating);
};

const [show, setModalShow] = useState(false);

const[newMovie, setNewMovie] = useState({
  id: Math.random(),
  poster:"",  //newMovie state
  name:"",
  rating: 0,
});

const handleMovie = () => {
  setModalShow(!show); //Show Modal
};


const addMovie = () => {
  if(newMovie.rating>=1 && newMovie.rating<=5){ //Adding movie
    setFilms([...Films,newMovie])
    handleMovie ()
  }
}

const handleAddMovie = (e) => {
  if (e.target.name === "rating") {
  setNewMovie({ ...newMovie, [e.target.name]: +e.target.value}); //Adding Movies Handlers
} else {
  setNewMovie({ ...newMovie, [e.target.name]: e.target.value});
}
}

/////////////////////////////////////////////////////////////////////////
  return (

<BrowserRouter>

  <div className="App">
  <div className="App-content">
    
    <Nav Input={Input} handleInput={handleInput} Rating={Rating} handleRating={handleRating} handleMovie={handleMovie} />
    <AddMovie show={show} onHide={() => setModalShow(false)} handleRating={handleRating} handleMovie={handleMovie} newMovie={newMovie} handleAddMovie={handleAddMovie} addMovie={addMovie}/>
    <Switch>
      <Route exact path="/"> 
        <Home/>
      </Route>
      <Route  path="/Movies" >
            <MovieContainer Films={Films} Input={Input} Rating={Rating} />    
      </Route>

      <Route path="/MovieDescription/:id" >
            <MovieDescription Films={Films}/>
      </Route>
    </Switch>

  </div>
  </div>

  </BrowserRouter>
  );
  }

  export default Main;
