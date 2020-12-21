import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {app} from '../../base';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import './Products.css';
const db = app.firestore()



const Product = (props) => {

    const [product, setValues] = useState({})


    const getProductById = async (id) => {
        const doc = await db.collection('products').doc(id).get();
        console.log(doc.id);
        setValues({...doc.data()})
        
    }


    useEffect(() => {
        if(props.currentSelectId === '') {
            setValues({})
        } else {
            getProductById(props.currentSelectId)
        }
    }, [props.currentSelectId])



    return (
        <>
            <Container fluid>
                <Row className="mt-2 mb-5 justify-content-center">
                        <Col md="12" lg="12" xs="12" key={product.id}>
                            <h3 className="text-center">PRODUCTO SELECCIONADO</h3>
                                <Card className="mt-3">
                                    <Card.Img variant="top" src={product.file} />
                                    <Card.Body className="texto-carta text-center">
                                        <Card.Title> <h5>{product.marca} - {product.modelo} </h5></Card.Title>
                                        <Card.Text>
                                            <p>Estilo: {product.estilo}</p>
                                            <p>Rodado: {product.rodado}</p>
                                            <p>Talle: {product.talle}</p>
                                            <p>{product.descripcion}</p>
                                            <h5>Precio: ${product.precio}</h5>
                                        </Card.Text>
                                        <Button className="boton-productos" variant="dark">
                                            <Link to={'/administrar'} style={{color:'white'}}> Volver </Link>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            
                        </Col> 
                </Row>
            </Container>
                
            
        </>
    );
}

export default Product;