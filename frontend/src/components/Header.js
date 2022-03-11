import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container,Navbar,Nav, NavDropdown } from 'react-bootstrap'
import {logout} from '../actions/userActions'


const Header = () => {
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = ()=>{
        dispatch(logout());
    }

    
    return (
        <header>
            <Navbar bg="black" variant='dark' expand="lg" collapseOnSelect>
                <Container style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'white'
                }}> 
                    <div>
                        <span class="logo">
                    <a href="/"> 
                        <img src="https://brown-bean-images.netlify.app/gallerypics/logo.png" height="50" width="120" alt="" /></a>
                    </span>
                        <LinkContainer to='/'>
                        <Navbar.Brand>BROWN BEAN COFFEE</Navbar.Brand>
                        </LinkContainer>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            
                            <Nav className="ml">
                                <LinkContainer to='/home'><Nav.Link><i className='fas fa-home'></i> Home</Nav.Link></LinkContainer>
                                <LinkContainer to='/contact'><Nav.Link ><i className='fas fa-phone'></i> Contact</Nav.Link></LinkContainer>
                                <LinkContainer to='/gallery'><Nav.Link ><i className='fas fa-image'></i> Gallery</Nav.Link></LinkContainer>
                                <LinkContainer to='/aboutus'><Nav.Link ><i className='fas fa-info'></i> About Us</Nav.Link></LinkContainer>
                                <LinkContainer to='/cart'><Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link></LinkContainer>
                                {userInfo ? (
                                    <NavDropdown title={userInfo.name} id='username'> 
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                ) :(
                                    <LinkContainer to='/login'>
                                    <Nav.Link style={{color:'white'}}>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                                )}
                                {userInfo && userInfo.isAdmin && (
                                    <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
