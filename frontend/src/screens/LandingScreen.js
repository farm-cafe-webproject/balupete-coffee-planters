import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const LandingScreen = () => {
    return (
        <div className="container">
            <Card className="bg-dark text-center" >
                <Card.Img src="https://images.pexels.com/photos/2316554/pexels-photo-2316554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title style={{ color: "black", fontWeight: "bold" }}><h1><strong>welcome to BrownBeanCoffee</strong></h1></Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    <div className="position-absolute top-50 start-50">
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