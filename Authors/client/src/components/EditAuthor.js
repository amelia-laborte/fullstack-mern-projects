import React,{ useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAuthor = () => {
  const {id} = useParams()
  
  
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthorName(res.data.authorName);
      })
      .catch((err) => {})
  }, [])


  
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})



  const editHandler = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/api/authors/${id}`, {
        authorName
      })
      .then((res) => {
        console.log(res)
        navigate("/authorlist")
      })
      .catch((err) => {
        console.log(err)
        setErrors(err.response.data.error)
      })
  }

  return (
    <div>

      <form onSubmit={editHandler}>
          <h1>Favorite Author</h1>
          <label>Author Name:{errors.authorName ?<span> {errors.authorName.message}</span> : null}</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            ></input>
            
        <input type ="Submit" value="Update Author"></input>
      </form>

    </div>
  );
};

export default EditAuthor;