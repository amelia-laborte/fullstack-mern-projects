import React,{ useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const {id} = useParams()
  
  
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {})
  }, [])


  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})



  const editHandler = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res)
        navigate("/productlist")
      })
      .catch((err) => {
        console.log(err)
        setErrors(err.response.data.error)
      })
  }

  return (
    <div>

      <form onSubmit={editHandler}>
          <h1>Product</h1>
          <label>Title:{errors.title ?<span> {errors.title.message}</span> : null}</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ></input>
            
          <label>Price:{errors.price ?<span> {errors.price.message}</span> : null}</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            ></input>
            
          <label>Description:{errors.description ?<span> {errors.description.message}</span> : null}</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></input>
            
        <input type ="Submit" value="Update Product"></input>
      </form>

    </div>
  );
};

export default EditProduct;
