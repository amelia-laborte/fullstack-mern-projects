import React from "react";
import { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OneAuthor = () =>{
    const {id} = useParams()
    const [author,setAuthor] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            setAuthor(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])

    return(
        <div>
            <h1>{author.authorName}</h1>
            <Link to={`/editauthor/${author._id}`}>Edit Author</Link>
        </div>
    )
}

export default OneAuthor;