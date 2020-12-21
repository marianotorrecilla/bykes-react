import React from 'react';
import {NavLink} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="mx-auto mb-4 head" fixed="top">
                <Navbar.Brand href="/" style={{color:'white'}} activeStyle={{ color: 'gray'}}>Bykes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'white'}} className="fas fa-bars"/>
                
                <Navbar.Collapse id="responsive-navbar-nav" style={{color:'white'}}>
                <Nav className="mr-auto">
                    <Nav.Item >
                        <NavLink to="/" exact style={{color:'gray'}} activeStyle={{ color: 'white'}} className="m-3">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/products/" style={{color:'gray'}} activeStyle={{ color: 'white'}} className="m-3" >Productos</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/administrar/" style={{color:'gray'}} activeStyle={{ color: 'white'}} className="m-3" >Administrar</NavLink>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            
            </Navbar>
            
        
        </>
    )
};

export default NavBar;

