
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import MovieContainer from './components/MovieContainer';
import React, { useState } from "react";
import AddMovie from './components/AddMovie';
import MovieDescription from "./components/MovDes/MovieDescription";


function App() {
  const [Films, setFilms] = useState([
    {
      id: Math.random(),
      img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      name: "Jhon Wick",
      description:"John Wick est un film d'action américain réalisé par David Leitch et Chad Stahelski et sorti en 2014.",
      rating: 4,
      trailer:"https://www.youtube.com/watch?v=C0BMx-qxsP4",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      description:"Avatar est un film de science-fiction américain réalisé par James Cameron, sorti en 2009. Il s'agit du premier film de la franchise cinématographique Avatar.",
      rating: 2,
      trailer:"https://www.youtube.com/watch?v=5PSNL1qE6VY",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      description:"Iron Man 2 est un film américain réalisé par Jon Favreau, sorti en 2010. C'est la suite d'Iron Man (2008) du même réalisateur et précède Iron Man 3 (2013).",
      rating: 5,
      trailer:"https://www.youtube.com/watch?v=wKtcmiifycU",
    },
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      description:"The Batman est un film américain centré sur le personnage de Batman qui est réalisé par Matt Reeves dont la sortie est prévu pour le 2 mars 2022.",
      rating: 5,
      trailer:"https://www.youtube.com/watch?v=mqqft2x_Aa4",
    },
    {
      id: Math.random(),
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      description:"Deadpool 2 est un film de super-héros américano-canadien réalisé par David Leitch, sorti en 2018. Il met en scène le personnage du même nom tiré des comics, interprété par Ryan Reynolds. Il s'agit de la suite de Deadpool de Tim Miller, sorti en 2016, et du onzième film de la série de films X-Men.",
      rating: 4,
      trailer:"https://www.youtube.com/watch?v=D86RtevtfrA",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      name: "Jumnanji",
      description:"Jumanji : est un film américain réalisé par Jake Kasdan, sorti en 2017.",
      rating: 3,
      trailer:"https://www.youtube.com/watch?v=2QKg5SZ_35I",
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      description:"Vikings (Severed Ways: The Norse Discovery of America) est un film d'aventures dramatique américain de Tony Stone, sorti en 2007.",
      rating: 1,
      trailer:"https://www.youtube.com/watch?v=ANCAyz_U_oo",
    },
  ]);

const[Input,setInput] = useState ("");

const[Rating, setRating] = useState(0);




const handleInput = (e) => {

  setInput(e.target.value);
};

const handleRating = (newRating) => {
  setRating(newRating);
};

const [show, setModalShow] = useState(false);

const handleMovie = () => {
  setModalShow(!show);
  // setModalShow(true);
 };

 const[newMovie, setNewMovie] = useState({
   id:Math.random(),
   img:"",
   name:"",
   descrption:"",
   rating: 0,
   trailer:"",
 });


 const handleAddMovie = (e) => {
  if (e.target.name === "rating") {
  setNewMovie({ ...newMovie, [e.target.name]: +e.target.value});
} else {
  setNewMovie({ ...newMovie, [e.target.name]: e.target.value});
}
 }

const addMovie = () => {
  if(newMovie.rating>=1 && newMovie.rating<=5){
    setFilms([...Films,newMovie])
    handleMovie ()
  }
}

  return (

<BrowserRouter>

    

<div className="App">
    
      <Nav Input={Input} handleInput={handleInput} Rating={Rating} handleRating={handleRating} handleMovie={handleMovie} />

  <Switch>
  
    <Route exact path="/" >

          <MovieContainer Films={Films} Input={Input} Rating={Rating} />

          <AddMovie show={show}
           onHide={() => setModalShow(false)} handleRating={handleRating} handleMovie={handleMovie} newMovie={newMovie} handleAddMovie={handleAddMovie} addMovie={addMovie}/>
               {/* <AddMovie show={modalShow}
               onHide={() => setModalShow(false)} /> */}
    
    </Route> 

    <Route path="/MovieDescription/:id" >      
         

          <MovieDescription Films={Films}/>

    </Route>

  </Switch>
  
  
 </div>
  
  

</BrowserRouter> 
  );
  }

  export default App;
