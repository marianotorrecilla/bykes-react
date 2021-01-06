import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {app} from '../../base';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import './Products.css';
const db = app.firestore()



const ProductInd = (props) => {

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
                <Row className="mt-5 mb-5 justify-content-center">
                    
                        <Col md="6" lg="6" xs="6" key={product.id}>
                            <h3 className="text-center">{product.marca} - {product.modelo}</h3>
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
                                            <Link to={'/products'} style={{color:'white'}}> Volver </Link>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            
                        </Col> 
                   
                </Row>
            </Container>
                
            
        </>
    );
}

export default ProductInd;

/*useEffect(() => {
        const db = app.firestore()
        const productCollection = db.collection("products");
        const product = productCollection.doc(product.id);

        product.get().then((doc) => {
            if (!doc.exists) {
                console.log('El producto no existe');
                return;
            }
            console.log('Producto encontrado');
            setValues({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log('Error', error);
        })
    })*/
