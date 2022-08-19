import React, {useState} from 'react';
import axios from 'axios';
const FormData = (props) => {

    const [title, setTitle] = useState ("")
    const [price, setPrice] = useState ("")
    const [description, setDescription] = useState ("")


    const createProduct = (e) => {
        e.prevent.default();
        axios.post("http://localhost:8000/api/products/create",{
            title,
            price,
            description
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    };

return(
    <form onSubmit = {createProduct}>
        <div>
            <h1>Product Manager</h1>
            <label>Title:</label>
            <input type= "text" value={title} onChange ={(e) => 
                {setTitle(e.target.value)}}></input>
        </div>
        <div>
            <label>Price:</label>
            <input type= "text" value={price} onChange ={(e) => 
                {setPrice(e.target.value)}}></input>
        </div>
        <div>
            <label>Description:</label>
            <input type= "text" value={description} onChange ={(e) => 
                {setDescription(e.target.value)}}></input>
        </div>
        <input type ="Submit" value="Create Product"></input>
    </form>

);
};


export default FormData;