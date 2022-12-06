import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Cart from "./component/Cart";
import Default from "./component/Default";
import CartOpen from "./component/CartOpen";

export class App extends Component {
  render() {
    return (
    // <React.Fragment>
     <Router>
        
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/details"element={<Details />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Default />}></Route>
          <Route path="/cartopen" element={<CartOpen />}></Route>
        </Routes>
        {/* <CartOpen/> */}
      </Router> 
      // </React.Fragment>
    );
  }
}

export default App;
