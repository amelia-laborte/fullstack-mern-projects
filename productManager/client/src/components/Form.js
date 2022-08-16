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

};


export default FormData;