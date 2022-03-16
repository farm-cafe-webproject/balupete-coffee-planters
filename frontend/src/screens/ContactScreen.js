import React from 'react'
import { Row,Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import '../index.css'

const ContactScreen = () => {
    return (
        <>
            <Row>
                <Col md={8}>
                    <Image
                        src="https://brown-bean-images.netlify.app/gallerypics/contactus.jpg"
                        rounded fluid
                    />
                </Col>
                <Col md={4}>
                    <p> <strong>BALEGODU HOBALI COFFEE BALEGARARA SANGHA</strong> </p>
                    <p>If u have any queries or want to know information about coffee and spices feel free to contact us </p>
                    <div><strong> PRESIDENT: SHRI K.M.UMANNA</strong> </div>
                    <p>Kuniganahalli</p>
                    <div><i className="fa-solid fa-phone fa-2xl my-4"></i><a href='tel:+917790987878' style={{textDecoration: 'none',color:'black'}}> +91 7624862745</a></div>
                    <div><i className="fa-solid fa-envelope fa-2xl my-4"></i><a href='https://mail.google.com' style={{textDecoration: 'none',color:'black'}}> BalupeteCoffeePlanters@gmail.com</a></div> 
                    <div><i className="fa-brands fa-instagram fa-2xl my-4"></i><a href='https://instagram.com/' style={{textDecoration: 'none',color:'black'}}> balupete_coffee_planters</a></div>
                    
                </Col>
            </Row>

        </>
    )
}

export default ContactScreen
