import React,{useState} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import FormContainer from '../components/FormContainer'
import {useNavigate} from 'react-router-dom'
import {savePaymentMethod} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const PaymentScreen = () => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart;

    if(!shippingAddress){
        navigate('/shipping');
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [paymentMethod,setPaymentMethod] = useState('PayPal');
    

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder');
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Select Method</Form.Label>
                
                <Col>
                    <Form.Check
                    type='radio'
                    label='PayPal or CreditCard'
                    id='PayPal'
                    name='PaymentMethod'
                    value='paypal'
                    checked
                    onChange={(e)=>setPaymentMethod(e.target.value)}>

                    </Form.Check>
                    <Form.Check
                    type='radio'
                    label='Stripe'
                    id='Stripe'
                    name='PaymentMethod'
                    value='Stripe'
                    checked
                    onChange={(e)=>setPaymentMethod(e.target.value)}>

                    </Form.Check>
                </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default PaymentScreen