import React, { useState } from 'react';
import {Col , Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, price, short_des, image,id } = props.food;
    return (
            <Col md = {4}>
            <Link to={"/food/" + id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {short_des}
                        </Card.Text>
                        <Card.Text>
                            {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            </Col>
    );
};

export default Product;