import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import Auth from '../Login/useAuth';
const Cart = (props) => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.singInWithGoogle()
            .then(res => {
                // window.location.pathname = '/cart';
                // window.history.back(); 
            })
    }
    // console.log(props);
    const cart = props.cart;
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
    },0)
    
    //Delivery fee
    let deliveryFee = 0;
    if (total > 100) {
        deliveryFee = 0;
    }
    else if (total > 50) {
        deliveryFee = 5.99;
    }
    else if (total > 0) {
        deliveryFee = 8.99;
    }
    //Tax

    const tax = total / 5;


    //Hook From
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        console.log(auth.user.email);
        const orderDetails = {email: auth.user.email};
        fetch('https://red-onion-eco-web.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(order => {
               console.log("order placed")
            })
     }
    return (
        <Container>
            <Row> 
                {
                    cart.length<1 && <h2> Your Shopping Cart is Empty! Keep Shopping </h2>
                }
                <Col md={6}>
                    {cart.length ?
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className = "form-control" name="deliver" ref={register({ required: true })} placeholder="Deliver to Door" />
                        {errors.deliver && <span style={{ color: "red" }}>Deliver to Door required</span>}
                        <br />
                        <input className = "form-control" name="address" ref={register({ required: true })} placeholder="107 Rd No 8" />
                        {errors.address && <span style={{ color: "red" }}>Valid Address required</span>}
                        <br />
                        <input className = "form-control" name="address1" ref={register({ required: true })} placeholder="Flat, suite, floor" />
                        {errors.address1 && <span style={{ color: "red" }}>Flat, suite, floor required</span>}
                        <br />
                        <input className = "form-control" name="name" ref={register({ required: true })} placeholder="Business Name" />
                        {errors.name && <span style={{ color: "red" }}>Enter your business name required</span>}
                        <br />
                        <input className = "form-control" name="instructor" ref={register({ required: true })} placeholder="Add Delivery instructor" />
                        {errors.instructor && <span style={{ color: "red" }}>Add Delivery instructor required</span>}
                        <br />
                        <input style={{ backgroundColor:"#F91944", color:"#fff"}} className = "form-control" type="submit" />
                    </form>
                    : <p></p>
                    }
                </Col>
                <Col md={6}>
                    {cart.length ?
                    <div>
                        <h4>From Gulshan Plaza Restura GPR</h4>
                        <h6>Arriving in 20-30 min</h6>
                        <h6>107 Rd No 8</h6>
                    </div>
                    : <p></p>
                    }
                    {
                        cart.map(item =>
                            <Card key={item.id} className = "cart-item" style={{ width: '32rem',borderRadius: "10px", marginBottom : "10px" }}>
                                <Card.Body className = "cart">
                                    <div style = {{width : "100px"}} className = "cart-info">
                                        <Card.Img variant="top"  src={item.image} />
                                    </div>
                                    <div className = "cart-info">
                                        <Card.Title> {item.name} </Card.Title>
                                        <Card.Text style={{ color: "red", fontSize: "2rem", fontWeight: "500"}}>
                                            {item.price}
                                        </Card.Text>
                                    </div>
                                    <div className= "input-group number-spinner center-item">
                                        <button onClick={() => props.handleCheckOut(item.id, (item.quantity - 1))} className="btn btn-default cart-btn"><FontAwesomeIcon icon={faMinus} /></button>
                                        <input type="text" className="form-control text-center" id="num" value={item.quantity} />
                                        <button onClick={() => props.handleCheckOut(item.id, (item.quantity + 1))} className="btn btn-default cart-btn"><FontAwesomeIcon icon={faPlus} /></button>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    }
                    {cart.length ?
                    <div>
                        <p className="d-flex justify-content-between"> <span> Subtotal. {totalQuantity} item </span> <span> {total} </span> </p>
                        <p className="d-flex justify-content-between"> <span> Tax </span> <span> {tax} </span> </p>
                        <p className="d-flex justify-content-between"> <span> Delivery fee </span> <span> {deliveryFee} </span> </p>
                        <p className="d-flex justify-content-between"> <span> Total </span> <span> {(total + deliveryFee + tax).toFixed(2)} </span> </p>
                        {
                            auth.user ?
                            <Link to = "/">
                            <Button onClick={props.handleProccedCheckout} className="checkout-btn" >Check Out Your Food</Button>
                                    </Link>
                            :
                            
                            <Button onClick={handleSignIn} className = "checkout-btn" > Login to procced </Button>
                            
                        }

                    </div>
                        : <p></p>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;