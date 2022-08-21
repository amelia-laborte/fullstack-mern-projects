import React from "react";
import { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OneProduct = () =>{
    const {id} = useParams()
    const [product,setProduct] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])

    return(
        <div>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <Link to={`/editproduct/${product._id}`}>Edit Product</Link>
        </div>
    )
}

export default OneProduct;