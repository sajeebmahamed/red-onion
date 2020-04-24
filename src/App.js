import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    console.log("Cart implemented", item);
    const newCart = [...cart, item];
    setCart(newCart);
  }
  const handleCheckOut = (productId, productQuantity) => {
    const newCart = cart.map(item => {
      if(item.id == productId){
        item.quantity = productQuantity;
      }
      return item;
    })
    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }
  return (
    <div>
      <Router>
      <Header to = "/cart"  cart = {cart}>
          <Cart></Cart>
      </Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <Shop></Shop>
          </Route>
          <Route path="/food/:itemId">
            <ProductDetails handleAddToCart={handleAddToCart}></ProductDetails>
          </Route>
          <Route>
            <Cart handleCheckOut={handleCheckOut} cart={cart}></Cart>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
