import React from 'react';
import logo from '../../logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Header = (props) => {
    const auth = useAuth();
    const handleSignIn = () => {
        auth.singInWithGoogle()
            .then(res => {
                // window.location.pathname = '/cart';
                // window.history.back(); 
            })
    }
    const handleSignOut = () => {
        auth.signOut()
            .then(res => {
                window.location.pathname = '/';
            });
    }
    console.log(auth);
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Link to="/">
                        <a href="/"><img width="200px" src={logo} alt="" /></a>
                    </Link>
                </Col>
                <Col md={6}>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link>
                                    <Link to="/cart">
                                        <span> <FontAwesomeIcon icon={faShoppingCart} /> </span> {props.cart.length}
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    {auth.user && <span>Welcome {auth.user.name}</span>}
                                </Nav.Link>
                                {
                                
                                auth.user ?
                                <Nav.Link>
                                            <Link onClick={handleSignOut}> Sign Out </Link>
                                </Nav.Link>
                                :
                                <Nav.Link href="#">
                                            <Button onClick={handleSignIn} variant="danger">Login</Button>
                                    {/* <Link to="/login"> Sign in </Link> */}
                                </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;