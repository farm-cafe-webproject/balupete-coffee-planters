import React, { useState,useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { login } from '../actions/userActions'
import {Form,Button,Row,Col} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import  FormContainer from '../components/FormContainer'
import Image from 'react-bootstrap/Image'

const LoginScreen = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {loading,error,userInfo} = userLogin;
    const redirect = location.search ? location.search.split('=')[1] : '/';
    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }
    },[userInfo,redirect,navigate])
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }
    
    return (
        <Row>
            <Col md={4}>
            <Image
            src=
        "https://brown-bean-images.netlify.app/gallerypics/login.png"
                rounded fluid
            />
            </Col>
            <Col md={8}>
            <FormContainer>
                <h1>Log In</h1>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader/>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email' className='my-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button className='my-3' type='submit' variant='primary'>Sign In</Button>
                </Form>
                <Row className='py-3 '>
                    <Col>
                    New Customer ?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}`:'/register'}>
                        Register
                    </Link>
                    </Col>
                </Row>
                </FormContainer>
            </Col>
        </Row>
    )
}

export default LoginScreen
