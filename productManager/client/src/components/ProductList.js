import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

    const ProductList = () => {
        const [list,setList] = useState ([])

        useEffect (()=>{
            axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                setList(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },[])

        const deleteHandler = (productId) =>{
            //passing in the specific id of the product to be deleted
            axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res)=>{
                const newList = list.filter((product)=>{
                    return product._id !== productId
                })
                setList(newList)
            }).catch((err)=>{
                console.log(err.response)
            })

        }

        return(
            <div>
                {
                    list.map((product)=>(
                        <div>
                            <h1><Link to={`/oneproduct/${product._id}`}>{product.title}</Link></h1>
                            <h2>{product.price}</h2>
                            <p>{product.description}</p>
                            <button onClick={()=>deleteHandler(product._id)}>Delete Product</button>
                            
                        </div>

                    ))
                }
            </div>
        )
    }

    export default ProductList;