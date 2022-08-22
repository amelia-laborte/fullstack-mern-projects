import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [title, setTitle] = useState ("")
    const [price, setPrice] = useState ("")
    const [description, setDescription] = useState ("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create",{
            // these have to match what it's called in model
            title,
            price,
            description
        }).then((res)=>{
            console.log(res)
            navigate("/productlist")//this will navigate to a url route onSubmit
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error)
        })

    }

return(
    <form onSubmit = {submitHandler}>
        <div>
            <h1>Product</h1>
            <label>Title:</label>
            <input type= "text" onChange ={(e) => setTitle(e.target.value)}></input>
            <br></br>{errors.title ?<span> {errors.title.message}</span> : null}
        </div>
        <div>
            <label>Price:</label>
            <input type= "text" onChange ={(e) => setPrice(e.target.value)}></input>
            <br></br>{errors.price ?<span> {errors.price.message}</span> : null}

        </div>
        <div>
            <label>Description:</label>
            <input type= "text" onChange ={(e) => setDescription(e.target.value)}></input>
            <br></br>{errors.description ?<span> {errors.description.message}</span> : null}

        </div>
        <input type ="Submit" value="Create Product"></input>
    </form>

);
};


export default Form;