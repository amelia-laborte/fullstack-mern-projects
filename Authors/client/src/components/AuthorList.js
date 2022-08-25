import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

    const AuthorList = () => {
        const [list,setList] = useState ([])

        useEffect (()=>{
            axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                setList(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },[])

        const deleteHandler = (authorId) =>{
            //passing in the specific id of the product to be deleted
            axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res)=>{
                const newList = list.filter((author)=>{
                    return author._id !== authorId
                })
                setList(newList)
            }).catch((err)=>{
                console.log(err.response)
            })

        }

        return(
            <div>
                {
                    list.map((author)=>(
                        <div>
                            <h1><Link to={`/oneauthor/${author._id}`}>{author.authorName}</Link></h1>
                            <h2>{author.authorName}</h2>
                            <button onClick={()=>deleteHandler(author._id)}>Delete Author</button>
                            
                        </div>

                    ))
                }
            </div>
        )
    }

    export default AuthorList;