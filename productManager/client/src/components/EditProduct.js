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
      .catch((err) => {});
  }, []);


  const navigate = useNavigate;
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  const editHandler = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        navigate("/oneproduct");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div>

      <form onSubmit={editHandler}>
          <h1>Product</h1>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        <button>Update Product</button>
      </form>

    </div>
  );
};

export default EditProduct;
