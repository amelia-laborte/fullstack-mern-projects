import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    return (
        <div>
            <h1>Favorite Authors</h1>
            <NavLink to="/authorlist">Home</NavLink><br></br>
            <NavLink to="/form">Add new Author</NavLink>
        </div>
    )
}

export default NavBar;