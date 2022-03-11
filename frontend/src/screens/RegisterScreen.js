import React, { useState,useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { register } from '../actions/userActions'
import {Form,Button,Row,Col} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import  FormContainer from '../components/FormContainer'
import Image from 'react-bootstrap/Image'


const RegisterScreen = () => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch(); 
    const userRegister = useSelector(state => state.userRegister);
    const {loading,error,userInfo} = userRegister;
    const redirect = location.search ? location.search.split('/')[1] : '/';
    useEffect(()=>{
        if(userInfo){
            navigate(redirect);
        }
    },[userInfo,navigate,redirect])
    const submitHandler = (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('passwords does not match');
        }else{ 
            dispatch(register(email,name,password))
        }     
    }
    
    return (
        <Row>
            <Col md={4}>
            <Image
            src=
            "https://brown-bean-images.netlify.app/gallerypics/signup.png"
                rounded fluid
            />
            </Col>
            <Col md={8}>
            <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirm password'>
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button className='my-3' type='submit' variant='primary'>Register</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                Have an Account?{' '}
                <Link to={redirect ? `/login?redirect=${redirect}`:'/register'}>
                        LogIn
                </Link>
                </Col>
            </Row>
        </FormContainer>
            </Col>
        </Row>
    )
}

export default RegisterScreen
