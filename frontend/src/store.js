<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
	
});

let initialState = {
	
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
=======
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './reducers/productReducers.js'
import {cartReducer} from './reducers/cartReducers.js'
import {userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer} from './reducers/userReducers.js'
import {orderCreateReducer,orderDetailsReducer, orderListReducer,orderPayReducer} from './reducers/orderReducers' 

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderList: orderListReducer,
    orderPay:orderPayReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{}

const initialState = {
    cart:{ cartItems  : cartItemsFromStorage,
            shippingAddress: shippingAddressFromStorage},
    userLogin:{ userInfo : userInfoFromStorage }
};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
>>>>>>> d7e603148707eb541af330235e5cf0b04d6f086f

export default store;
