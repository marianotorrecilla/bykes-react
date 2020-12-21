import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import ImgHome3 from '../../resources/atardecer.jpg';
import ImgHome4 from '../../resources/fixiecobre.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
        <Container fluid className="mt-5 cuerpo">
            <Row>
                <Col md="12" lg="12" xl="12" xs="12">
                <Card className="bg-light text-white mt-3 mb-3">
                    <Card.Img src={ImgHome4} alt="Card image" className="w-100"/>
                    <Card.ImgOverlay>
                        <Card.Title className="text-center">
                            <h1 >
                            ENCONTRATE CON TU MEJOR VERSIÓN
                            </h1>
                            <h2 >
                            Bykes - Make It Yours
                            </h2>
                            <Button className="mt-1 btn-small boton" variant="transparent">
                                <Link to={'/products'} style={{color: 'white'}}>VER</Link>
                            </Button>
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-light text-white mt-3 mb-3">
                    <Card.Img src={ImgHome3} alt="Card image" className="w-100"/>
                    <Card.ImgOverlay>
                        <Card.Title className="text-center">
                            <h1 >
                            TENEMOS LAS BICICLETAS QUE SE ADAPTAN A TU ESTILO
                            </h1>
                            <h2 >
                            Bykes - Make It Yours
                            </h2>
                            <Button className="mt-1 btn-small boton" variant="transparent">
                                <Link to={'/products'} style={{color: 'white'}}>VER</Link>
                            </Button>
                        </Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
        
        
    )
};

export default Home;