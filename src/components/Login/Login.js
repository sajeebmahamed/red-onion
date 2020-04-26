import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.css'
import Logo from '../../logo2.png'
import Auth from './useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const auth = Auth();
    console.log(auth);

    //default google start
    // const handleSignIn = () => {
    //     auth.singInWithGoogle()
    //     .then(res => {
    //         // window.location.pathname = '/cart';
    //         // window.history.back(); 
    //     })
    // }
    // const handleSignOut = () => {
    //     auth.signOut()
    //         .then(res => {
    //             window.location.pathname = '/';
    //         });
    // }
    //default google end

    //Hook From
    const { register, handleSubmit, errors, watch } = useForm()
    const onSubmit = data => { console.log(data) }
    return (
        <Container>
            <Row>
                <Col md = {12}>
                    
                    {/* <button onClick={handleSignIn} >Login</button> */}
                    {/* <button onClick={handleSignOut} >Sign Out</button> */}
                    
                    <form onSubmit={handleSubmit(onSubmit)} className = "login-form">
                        <img style = {{width : '50%', paddingBottom : '34px'}} src={Logo} alt=""/>
                        <input className="form-control" name="name" ref={register({ required: true })} placeholder="Full Name" />
                        {errors.name && <span style={{ color: "red" }}>Please Enter Your full name</span>}
                        <br />
                        <input className="form-control" name="email" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span style={{ color: "red" }}>Enter Valid Email</span>}
                        <br />
                        <input className="form-control" type="password" name="password" ref={register({ required: true })} placeholder=" Password" />
                        {errors.password && <span style={{ color: "red" }}> Enter Password </span>}
                        <br />
                        <input className="form-control" type="password" name="confirmPpass" ref={register({ validate: (value) => value === watch('password') })} placeholder="Confirm Password" />
                        {errors.confirmPpass && <span style={{ color: "red" }}>Password dont match</span>}
                        <br />
                        <input style={{ backgroundColor: "#F91944", color: "#fff" }} className="form-control" type="submit" value = "login" />
                        <p className = "text-center">Already Have an Account</p>
                        <p className = "text-center">or</p>
                        <Button style = {{marginLeft: "173px"}}> <FontAwesomeIcon icon={faArchive} />   Google</Button>
                    </form>
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                        <img style={{ width: '50%', paddingBottom: '34px' }} src={Logo} alt="" />
                        <input className="form-control" name="email" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span style={{ color: "red" }}>Enter Valid Email</span>}
                        <br />
                        <input className="form-control" type="password" name="password" ref={register({ required: true })} placeholder=" Password" />
                        {errors.password && <span style={{ color: "red" }}> Enter Password </span>}
                        <br />
                        <input style={{ backgroundColor: "#F91944", color: "#fff" }} className="form-control" type="submit" value="login" />
                        <p className="text-center">or</p>
                        <Button style={{ marginLeft: "173px" }}> <FontAwesomeIcon icon={faArchive} />   Google</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;