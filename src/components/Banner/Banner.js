import React from 'react';
import './Banner.css'
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid className = "banner">
            <Container>
                <Row>
                    <Col md = {12}>
                        <div style = {{marginTop: "15%"}}>
                            <h3 style = {{fontSize: "3rem", fontWeight: "400"}} className="search-box d-flex justify-content-center"> Best food waiting for your belly </h3>
                            <Form inline className="search-box d-flex justify-content-center">
                                <input className="form-control search" name="instructor" placeholder = "Search food items" />
                                <input className="form-control search-btn" type="submit" value = "Search" />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;