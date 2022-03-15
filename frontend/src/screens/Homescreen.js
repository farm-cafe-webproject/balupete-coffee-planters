import React, {useEffect, Fragment } from 'react' 
import { Row, Col } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions.js'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Message from '../components/Message'
import { useParams } from 'react-router-dom'
// import ProductCarousel from '../components/ProductCarousel.js'
import Meta from '../components/Meta.js'
// import {Link} from 'react-router-dom'

const Homescreen = () => {
    
    const dispatch = useDispatch()
    const params = useParams()
    const keyword = params.keyword
    const pageNumber = params.pageNumber || 1
    
    const productList = useSelector(state => state.productList)
    const {loading,error,products,page,pages} = productList

    useEffect(() => {
            dispatch(listProducts(keyword,pageNumber))
    }, [dispatch,keyword,pageNumber])

    
    return (
        <>
            <Meta/>
            {/* <ProductCarousel /> */}
            {/* {!keyword ? (<ProductCarousel/>) : ( <Link to='/home' className='btn btn-light'>Go Back<Link/>)} */}
            <h1>Our Latest Products</h1>
            {loading ? (<Loader/>) :error ? (<Message variant ='danger'>{error}</Message>) : (
                <>
                    <Row>
                        {products.map((product) => ( 
                            <Col sm={12} md={6} lg={8} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate page={page} pages={pages} keyword={keyword ? keyword :''} />
                </>
            )}
        </>
    )
}

export default Homescreen

