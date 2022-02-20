import React from 'react';
import { Card, Row ,Col } from "react-bootstrap";


const GalleryScreen = () => {
    return( 
    <div>
        
        <h2>Here are some of the coffee farm pics from Sakleshpura</h2>
        <Row>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/1.png" width="150px" height="150px"/>
                    <Card.Body>
                        <Card.Title as="div">
                            <strong>Mahesh</strong> 
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/2.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/3.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/4.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/5.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/6.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/7.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/8.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/9.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/10.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/11.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/12.png" width="150px" height="150px"/>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={8} xl={3}>
                <Card className="my-3 p-3 rounded">
                    <Card.Img src="https://brown-bean-images.netlify.app/gallerypics/13.png" width="150px" height="150px"/>
                </Card>
            </Col>
            
            
        </Row>

        
    </div>
    
    );
};

export default GalleryScreen;
