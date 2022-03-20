import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const LandingScreen = () => {
    return (
        <div className="container ">
            <Card className="bg-dark text-center" >
                <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/coffeebg.jpg" alt="Card image" />
                <Card.ImgOverlay className="position-absolute top-50 start-0">
                    <Card.Title style={{ color: "black", fontWeight: "bold" }}><h1><strong>WELCOME TO BROWNBEAN COFFEE</strong></h1></Card.Title>
                    <Card.Text>
                    SCIENCE MAY NEVER COME UP WITH A BETTER OFFICE COMMUNICATION SYSTEM THAN THE COFFEE BREAK 
                    </Card.Text>
                    <Card.Text>A BAD DAY WITH COFFEE IS BETTER THAN A GOOD DAY WITHOUT IT</Card.Text>
                    <div >
                        <LinkContainer to="/home" >
                            <Button variant="primary" size="lg">
                                Go to Products
                            </Button>
                        </LinkContainer>
                    </div>
            </Card.ImgOverlay>
        </Card>
        
        </div >
    )
}

export default LandingScreen