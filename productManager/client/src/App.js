import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route, NavLink} from 'react-router-dom';
import Form from './components/Form';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/productlist" element={<ProductList/>}></Route>
          <Route path="/oneproduct/:id" element={<OneProduct/>}></Route>
          <Route path="/editproduct/:id" element={<EditProduct/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;