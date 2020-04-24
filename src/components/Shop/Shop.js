import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import data from '../../mock_data/foodItems.json';
import Product from '../Products/Product';
import ProductDetails from '../ProductDetails/ProductDetails';

const Shop = () => {
    const [foods, setFoods] = useState(data);
    const [selectFoodType, setSelectFoodType] = useState("breakfast");
    const selectFoods = foods.filter(food => food.type === selectFoodType);
  
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <>
                        <Nav className="justify-content-center" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link onClick={() => setSelectFoodType("breakfast")} href="#">Breakfast</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => setSelectFoodType("lunch")} href="#">Lunch</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link onClick={() => setSelectFoodType("dinner")} href="#">Dinner</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </>
                </Col>
            </Row>
            <Row>
                {
                    selectFoods.map(foods => <Product key = {foods.id} food = {foods}></Product>)
                }
            </Row>
        </Container>
    );
};

export default Shop;