import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {listOrders} from '../actions/orderActions.js';
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col } from 'react-bootstrap'

const OrderListScreen = () => {
        
    const dispatch = useDispatch()

    const { loading, error, orders } = useSelector((state) => state.orderList);

    useEffect(() => {
        if(error)
        {
            console.log(error);
        }
        dispatch(listOrders());
    }, [dispatch, error]);

    return (
        <div>
            {loading ? (<Loader/>) :error ? (<Message variant ='danger'>{error}</Message>) : (
                <Row>
                {orders.map((order) => ( 
                    <Col sm={12} md={6} lg={8} xl={3}>
                        <Link to={`/order/${order._id}`}>
                            {order._id}
                        </Link>
                    </Col>
                ))}
            </Row>
            )}
        </div>
    );
};

export default OrderListScreen;
