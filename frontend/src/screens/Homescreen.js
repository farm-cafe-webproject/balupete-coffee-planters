import React, {useEffect } from 'react' 
import { Row, Col } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions.js'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'


const Homescreen = () => {
    
    const dispatch = useDispatch()
    
    const productList = useSelector(state => state.productList)
    const {loading,error,products} = productList

    useEffect(() => {
            dispatch(listProducts())
    }, [dispatch])

    
    return (
        <>
            <h1>Our Latest Products</h1>
            {loading ? (<Loader/>) :error ? (<Message variant ='danger'>{error}</Message>) : (
                <Row>
                {products.map((product) => ( 
                    <Col sm={12} md={6} lg={8} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
            )}
            

        </>
    )
}

export default Homescreen
