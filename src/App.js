import React, { useState, useEffect } from 'react';
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
// import { addToDatabaseCart, getDatabaseCart, processOrder } from './utilities/databaseManager';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/Login/useAuth';
import NoFound from './components/NoFound/NoFound';
import Inventory from './components/Inventory/Inventory';

function App() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    // console.log("Cart implemented", item);
    const newCart = [...cart, item];
    setCart(newCart);
    //localstorage
    // const sameItem = newCart.filter(pd => pd.id === item.id);
    // const count = sameItem.length;
    // addToDatabaseCart(item.id, count);
  }
  // Retrive data from localstorage
  // useEffect(() => {
  //   const savedCard = getDatabaseCart();
  //   const itemId = Object.values(savedCard);
  //   const previousCart = itemId.map(existingId => {
  //     const product = data.find(pd => pd.id === existingId);
  //     product.quantity = savedCard[existingId];
  //     return product;
  //   })
  //   setCart(previousCart);
  // },[]) 
  const handleCheckOut = (productId, productQuantity) => {
    const newCart = cart.map(item => {
      if (item.id == productId) {
        item.quantity = productQuantity;
      }
      return item;
    })
    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }
  
  const handleProccedCheckout = () => {
    setCart([]);
    // processOrder();
  }

  
  return (
    <div>
      <AuthContextProvider>
      <Router>
        <Header to="/cart" cart={cart}>
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path = "/cart">
            <Cart handleProccedCheckout={handleProccedCheckout} handleCheckOut={handleCheckOut} cart={cart}></Cart>
          </Route>
          <Route path = "*">
            <NoFound></NoFound>
          </Route>
          
        </Switch>
      </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
