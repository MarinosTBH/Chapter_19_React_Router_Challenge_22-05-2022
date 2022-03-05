

import Nav from "./components/Nav";
import MovieContainer from './components/MovieContainer';
import React, { useState } from "react";
import AddMovie from './components/AddMovie';


function App() {
  const [Films, setFilms] = useState([
    {
      id: Math.random(),
      img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      name: "Jhon Wick",
      descrption:"",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      descrption:"",
      rating: 2,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      descrption:"",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      descrption:"",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      descrption:"",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      name: "Jumnanji",
      descrption:"",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      descrption:"",
      rating: 1,
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
  
  <div className="App">
    
<Nav Input={Input} handleInput={handleInput} Rating={Rating} handleRating={handleRating} handleMovie={handleMovie} />

<MovieContainer Films={Films} Input={Input} Rating={Rating} />

<AddMovie show={show}
        onHide={() => setModalShow(false)} handleRating={handleRating} handleMovie={handleMovie} newMovie={newMovie} handleAddMovie={handleAddMovie} addMovie={addMovie}/>


{/* <AddMovie show={modalShow}
        onHide={() => setModalShow(false)} /> */}
  </div>
  );
  }

  export default App;
