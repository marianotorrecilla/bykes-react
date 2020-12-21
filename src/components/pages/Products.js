import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {app} from '../../base';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import './Products.css';
const db = app.firestore()



const Products = () => {

    const [products, setProducts] = useState([]);
    const [currentSelectId, setCurrentSelectId] = useState('');

    const getProducts = async () => {
        db.collection('products').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
            })
            setProducts(docs);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])



    return (
        <>
            <Container fluid className="mt-5 cuerpo">
            <Row>
                {products.map((product) => (
                    <Col md="12" lg="12" xl="12" xs="12">
                    <Card className="bg-transparent text-white border-0">
                        <Card.Img src={product.file} alt={product.marca} className="w-100"/>
                        <Card.ImgOverlay>
                            <Card.Title className="text-center ">
                                <h1 className="">
                                {product.marca} - {product.modelo}
                                </h1>
                                <h2 className="">
                                ${product.precio}
                                </h2>
                                <Button className="mt-1 btn-small boton" variant="transparent" onClick={()=> setCurrentSelectId(product.id)}>
                                    <Link to={`products/${product.id}`} onClick={()=> setCurrentSelectId(product.id)} style={{color: 'white'}} className="boton-ver">VER</Link>
                                </Button>
                            </Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                ))}
                
            </Row>
            </Container>
           
                
            
        </>
    );
}

export default Products;

