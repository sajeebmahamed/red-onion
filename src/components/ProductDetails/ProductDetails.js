import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import "./ProductDetails.css"
const ProductDetails = (props) => {
    // console.log("product details props",props);
    const [fooods, setFooods] = useState({})
    // console.log("dekha jak",fds);
    const { itemId } = useParams();
    // const foodItem = data.find(food => food.id === itemId);
    // const { name, full_des, image, price } = foodItem;
    const [quantity, setQuantity] = useState(1);
    const handleFinalCart = (foodItem) => {
        foodItem.quantity = quantity;
        props.handleAddToCart(foodItem);
    }
    useEffect(() => {
        fetch('https://red-onion-eco-web.herokuapp.com/products/'+ itemId)
            .then(res => res.json())
            .then(data => {
                setFooods(data);
            });
    }, [fooods])
    return (
        <Container>
            <Row>
                <Col md = {6}>
                    <div>
                        <h2> {fooods.name} </h2>
                        <p> {fooods.full_des} </p>
                        <h2> {fooods.price}</h2>
                        <Button onClick={() => handleFinalCart(fooods)} variant="warning"><FontAwesomeIcon icon={faCartPlus} /> Add</Button>
                    </div>
                    <div className="input-group number-spinner center-item incre">
                        <button onClick={() => setQuantity(quantity - 1)} className="btn btn-default cart-btn"><FontAwesomeIcon icon={faMinus} /></button>
                        <input type="text" style={{ borderRadius: "15px" }} className="form-control text-center" id="num" value = {quantity} />
                        <button onClick={() => setQuantity(quantity+1)} className="btn btn-default cart-btn"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </Col>
                <Col md={6}>
                    <img width="500px" src={fooods.image} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;