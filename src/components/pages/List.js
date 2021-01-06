import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {app} from '../../base';
import Edit from './Edit';
import Product from './Product';
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import {toast} from 'react-toastify';
import Swal from 'sweetalert2';
import './List.css';
const db = app.firestore()

const List = () => {

    const [products, setProducts] = useState([]);
    const [currentId, setCurrentId] = useState('');
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

    /*const onDeleteProduct = async (id) => {
        if(window.confirm('¿Estás seguro que querés eliminar este producto?')) {
            await db.collection('products').doc(id).delete();
            toast('Producto Eliminado!', {
                type: "error",
                autoClose: 2000
            })
        }
    }*/

    const onDeleteProduct = (id) => {
        Swal.fire({
            title: 'Estás seguro que querés eliminar este producto?',
            text: "Atención! Lo borrarás definitivamente y no podrás recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF3333',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Quiero Eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                db.collection('products').doc(id).delete();
                toast('Producto Eliminado!', {
                    type: "error",
                    autoClose: 2000
                })
            }
          })

        
    }


    useEffect(() => {
        getProducts();
    }, [])

    



    return (
        <>
        <Container>
            <article xs="12" md="12" lg="12" xl="12" className="mt-5 d-flex justify-content-center border-bottom border-dark">
                <h5 className="titulo p-3">LISTADO DE PRODUCTOS</h5>
            </article>
            
            <article className="mt-5">
                <Button type="submit" className="btn btn-success click" >
                    <Link to={'/administrar/create'} style={{color:'white'}}> Agregar Producto <ion-icon name="add-circle-outline"></ion-icon></Link>
                </Button>
            </article>
            
            <Row>
                <Col className="d-flex justify-content-center">
                <Table xs="10" md="12" lg="12" xl="12" className="table text-white mt-2">
                    <thead>
                        <tr xs="10" md="12" lg="12" xl="12">
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Ver</th>
                            <th>Editar</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>(
                            <tr key={product.id}>
                            <td> {product.marca} </td>
                            <td> {product.modelo} </td>
                            <td>
                                <Button type="submit" className="btn btn-info click" onClick={()=> setCurrentSelectId(product.id)} >
                                    Ver
                                </Button>
                            </td>
                            <td>
                                <Button type="submit" className="btn btn-warning click" onClick={()=> setCurrentId(product.id)}>
                                    Editar
                                </Button>
                                
                            </td>
                            <td>
                                <Button type="submit" className="btn btn-danger click" onClick={() => onDeleteProduct(product.id)} >Delete</Button>
                            </td>
                            </tr>
                        ))}  
                    </tbody>
                </Table>
                </Col>
            </Row>

            <Row xs="12" md="12" lg="12" xl="12" className="mt-5 d-flex justify-content-center border-top border-dark">
                <Col xs={12} md={5} lg={5} xl={5}>
                    <article xs="12" md="6" lg="6" xl="6" className="mt-5 d-flex justify-content-center">
                        <Product {...{currentSelectId, products}}/>
                    </article>
                </Col>
                <Col xs={12} md={7} lg={7} xl={7}>
            
                    <article xs="12" md="12" lg="12" xl="12" className="mt-5 d-flex justify-content-center">
                        <Edit {...{currentId, products}}/>
                    </article>

                    
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default List;