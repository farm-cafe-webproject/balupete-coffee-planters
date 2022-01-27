import React ,{useState,useEffect }from "react";//useStates and import axiom
import { Link,useParams,useNavigate} from "react-router-dom";//useParams
import { useSelector,useDispatch } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

import {listProductDetails} from '../actions/productActions.js'
import {addToCart} from '../actions/cartActions.js'


const ProductScreen = () => {
    const params = useParams();
    const navigate = useNavigate()
    
    const [qty,setQty] = useState(1);
    const productId = params.id


    const dispatch = useDispatch() 
    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(params.id))
    }, [dispatch,params])

    const addToCartHandler = () => {
        dispatch(addToCart(productId,qty))
        navigate("/cart")
    }

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">
                Go back
            </Link>
            {loading ? (<Loader/>) :error ? (<Message variant ='danger'>{error}</Message>) : (
                <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item> price: {product.price}</ListGroup.Item>
                        <ListGroup.Item> description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        price:
                                    </Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                                {product.countInStock>0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control as='select' value={qty} onChange={(e)=>
                                                setQty(e.target.value)}>
                                                { [...Array(product.countInStock).keys()].map((x)=> (
                                                    
                                                    <option key={x+1} value={x+1}>{x+1}</option>))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                            <ListGroup.Item>
                                <Button 
                                onClick = {addToCartHandler}
                                className="btn-block" type="button" disabled={product.countInStock === 0}>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )}
            
        </>
        );
};

export default ProductScreen;
