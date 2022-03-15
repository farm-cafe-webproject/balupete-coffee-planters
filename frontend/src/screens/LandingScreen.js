import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const LandingScreen = () => {
    return (
        <div className="container ">
            <Card className="bg-dark text-center" >
                <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/coffeebg.jpg" alt="Card image" />
                <Card.ImgOverlay className="position-absolute top-50 start-0">
                    <Card.Title style={{ color: "black", fontWeight: "bold" }}><h1><strong>welcome to BrownBeanCoffee</strong></h1></Card.Title>
                    <Card.Text>
                    Science may never come up with a better office communication system than the coffee break
                    </Card.Text>
                    <Card.Text>A bad day with coffee is better than a good day without it</Card.Text>
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