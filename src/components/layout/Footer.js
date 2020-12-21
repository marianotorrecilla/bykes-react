import React from 'react';
import { Navbar } from 'react-bootstrap';
import './NavBar.css';


const Footer = () => {
    return (
        <>
        <Navbar expand="lg" className="justify-content-center head">
                <Navbar.Brand className="navbar text-center" style={{color:'white' }}>
                    <h5> Bykes - Make it Yours </h5>
                    <a href="" class="btn icon-footer"><i class="fab fa-instagram"></i></a>
                    <a href="" class="btn icon-footer"><i class="fab fa-facebook-f"></i></a>
                    <a href="" class="btn icon-footer"><i class="fab fa-twitter"></i></a>
                    <a href="" class="btn icon-footer"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://goo.gl/maps/921zsfLbbKRozVHa6" class="btn icon-footer"><i class="fas fa-map-marker-alt"></i></a>
                    <h6 class="card-title titulo-foot-dev">design | marianotorrecilla</h6>
                </Navbar.Brand>
        </Navbar>
        </>
    )
};

export default Footer;