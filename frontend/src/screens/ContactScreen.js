import React from 'react'
import { Row,Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap'

const ContactScreen = () => {
    return (
        <>
            <Row>
                <div className='my-4'>
                    some matter to be added
                </div>
            </Row>
            <Row>
                <Col md={8}>
                    <Image
                        src="https://brown-bean-images.netlify.app/gallerypics/contactus.jpg"
                        rounded fluid
                    />
                </Col>
                <Col md={4}>
                    
                    <div><i className="fa-solid fa-envelope fa-2xl my-4"></i><a href='https://mail.google.com' style={{textDecoration: 'none',color:'black'}}> BalupeteCoffeePlanters@gmail.com</a></div> 
                    <div><i className="fa-solid fa-phone-rotary fa-2xl"></i><a href='https://mail.google.com' style={{textDecoration: 'none',color:'black'}}> 9441405698</a></div> 
                    
                </Col>
            </Row>

        </>
    )
}

export default ContactScreen
