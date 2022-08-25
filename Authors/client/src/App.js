import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import AuthorList from "./components/AuthorList";
import NavBar from './components/NavBar';
import OneAuthor from "./components/OneAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/authorlist" element={<AuthorList />}></Route>
          <Route path="/oneauthor/:id" element={<OneAuthor />}></Route>
          <Route path="/editauthor/:id" element={<EditAuthor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;