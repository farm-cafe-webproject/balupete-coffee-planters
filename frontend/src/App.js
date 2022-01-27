import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen.js'
import ProductScreen from './screens/ProductScreen.js';
import ContactScreen from './screens/ContactScreen.js'
import CartScreen from './screens/CartScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import ShippingScreen from './screens/ShippingScreen.js'
import PaymentScreen from './screens/PaymentScreen.js'
import PlaceOrderScreen from './screens/PlaceOrderScreen.js'
import OrderScreen from './screens/OrderScreen.js'
import OrderListScreen from './screens/OrdersListScreen.js';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/home' element={<Homescreen/>}/> 
            <Route path='/contact' element={<ContactScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/register' element={<RegisterScreen/>}/>
            <Route path='/shipping' element={<ShippingScreen/>}/>
            <Route path='/payment' element={<PaymentScreen/>}/>
            <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
            <Route path='/profile' element={<ProfileScreen/>}/>
            <Route  path='/product/:id' element={<ProductScreen/>}/>
            <Route  path='/cart' element={<CartScreen/>}/>
            <Route  path='/orders' element={<OrderListScreen/>}/>
            <Route  path='/order/:id' element={<OrderScreen/>}/>
            </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
