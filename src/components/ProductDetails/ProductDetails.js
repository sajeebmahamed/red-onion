import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import data from '../../mock_data/foodItems.json'
import "./ProductDetails.css"
const ProductDetails = (props) => {
    // console.log("product details props",props);
    const { itemId } = useParams();
    const foodItem = data.find(food => food.id == itemId);
    const { name, full_des, image, price } = foodItem;
    const [quantity, setQuantity] = useState(1);
    const handleFinalCart = (foodItem) => {
        foodItem.quantity = quantity;
        props.handleAddToCart(foodItem);
    }
    return (
        <Container>
            <Row>
                <Col md = {6}>
                    <div>
                        <h2> {name} </h2>
                        <p> {full_des} </p>
                        <h2> {price}</h2>
                        <Button onClick={() => handleFinalCart(foodItem)} variant="warning"><FontAwesomeIcon icon={faCartPlus} /> Add</Button>
                    </div>
                    <div className="input-group number-spinner center-item incre">
                        <button onClick={() => setQuantity(quantity - 1)} className="btn btn-default cart-btn"><FontAwesomeIcon icon={faMinus} /></button>
                        <input type="text" style={{ borderRadius: "15px" }} className="form-control text-center" id="num" value = {quantity} />
                        <button onClick={() => setQuantity(quantity+1)} className="btn btn-default cart-btn"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </Col>
                <Col md={6}>
                    <img width="500px" src={image} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;