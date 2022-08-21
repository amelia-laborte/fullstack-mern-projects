import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    return (
        <div>
            <h1>Product Manager</h1>
            <NavLink to="/productlist">Home</NavLink><br></br>
            <NavLink to="/form">Add new product</NavLink>
        </div>
    )
}

export default NavBar;