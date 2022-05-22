import React from "react";
import Nav from "./Comps/Nav";
import "./Comps/Styles/Home.css";
import home from "./Posters/Home.png";

function Home(){

    return (
        <>
            <Nav/>
            <div className="Home">
                <h1>Getlify Free Movies</h1>
                <img src={home} className=".png-home" alt="Home" />
            </div>
        </>
        )
}

export default Home;