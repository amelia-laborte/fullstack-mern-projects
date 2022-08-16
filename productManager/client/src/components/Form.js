import React, {useState} from 'react';

const FormData = (props) => {

    const [title, setTitle] = useState ("")
    const [price, setPrice] = useState ("")
    const [description, setDescription] = useState ("")

    const createProduct = (e) => {
        e.prevent.default();

        const newProduct = {title, price, description}
        setTitle("")
        setPrice("")
        setDescription("");

        console.log(newProduct)
    };

return(
    <form onSubmit = {createProduct}>
        <div>
            <label>Title:</label>
        </div>
        <div>
            <label>Price:</label>
        </div>
        <div>
            <label>Description:</label>
        </div>

    </form>

);
};


export default FormData;