import React from 'react';
import logo from '../../logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    console.log(props);
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <a href="/"><img width="200px" src={logo} alt="" /></a>
                </Col>
                <Col md={6}>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                    <Nav.Link>
                                       <Link to = "/cart">
                                        <span> <FontAwesomeIcon icon={faShoppingCart} /> </span> {props.cart.length}
                                    </Link>
                                    </Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="#">
                                    <Button variant="danger">Sign up</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;