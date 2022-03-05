
import React from 'react'
import {Navbar, Container, Button} from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';


const Nav = ({Input, handleInput, Rating, handleRating, handleMovie}) => {
  return (
    
 <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/56f170a1cb3840d853fdfdbf/56f170a1cb3840d853fdfdff_case-study-icon.png"
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '}
      Movies App
      </Navbar.Brand>
      <input placeholder='Search' value={Input} onChange={handleInput}/>
      <ReactStars
    count={5}
    size={24}
    isHalf={false}
    activeColor="#ffd700"
    edit={true}
    value={Rating}
    onChange={handleRating}
  />

  <Button onClick={handleMovie} variant="warning">Add Movie</Button>
    </Container>

  </Navbar>


  );
};

export default Nav;