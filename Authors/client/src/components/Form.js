import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [authorName, setAuthorName] = useState ("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/create",{
            // these have to match what it's called in model
            authorName,
        }).then((res)=>{
            console.log(res)
            navigate("/authorlist")//this will navigate to a url route onSubmit
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error)
        })

    }

return(
    <form onSubmit = {submitHandler}>
        <div>
            <h1>Favorite Authors</h1>
            <label>Name:</label>
            <input type= "text" onChange ={(e) => setAuthorName(e.target.value)}></input>
            <br></br>{errors.authorName ?<span> {errors.authorName.message}</span> : null}
        </div>
        <input type ="Submit" value="Add Author"></input>
    </form>

);
};


export default Form;