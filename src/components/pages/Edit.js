import React, { useEffect} from 'react';
import {app} from '../../base';
import {Link} from 'react-router-dom';
import {Col, Row, Form, Button} from 'react-bootstrap';
import useCustomForm from '../../services/useCustomForm';
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Create.css'
const db = app.firestore()

const schema = yup.object().shape({
    marca : yup.string().required('Es obligatorio'),
    modelo : yup.string().required('Es obligatorio'),
    estilo : yup.string().required('Es obligatorio'),
    talle : yup.string().required('Es obligatorio'),
    rodado : yup.string().required('Es obligatorio'),
    descripcion : yup.string().required('Es obligatorio'),
    precio : yup.string().required('Es obligatorio')
})

const Edit = (props) => {

    const [values, handler, setValues] = useCustomForm();

    const {register, handleSubmit, errors} = useForm({
        resolver : yupResolver(schema) 
    })

    const addEditProduct = async (productObject) => {
        try {
            
            await db.collection('products').doc(props.currentId).update(productObject);
            toast('Producto Editado!!!', {
                type: "warning",
                autoClose: 2000
            })
            props.setCurrentId('')
                 
           
            
        } catch (error) {
            console.error(error)
        }
        
    }

    const update = (e) => {
        console.log('Producto Editado!!!');
        console.log(e.marca, e.modelo);
        addEditProduct(values)
        setValues({});
    }

    const getProductById = async (id) => {
        const doc = await db.collection('products').doc(id).get();
        setValues({...doc.data()})
    }

    useEffect(() => {
        if(props.currentId === '') {
            setValues({})
        } else {
            getProductById(props.currentId)
        }
        
    }, [props.currentId])

    

    return (
        <>
            
                <Row md="12" lg="12" xl="12" xs="12" className=" mb-5 justify-content-center">
                    <Col md="12" lg="12" xl="12" xs="12">
                        <h3 className="text-center mt-2">EDITAR PRODUCTO</h3>
                        <Form className="mt-5" key={values.id} onSubmit={handleSubmit(update)} >
                            
                            <div className="form-group">
                                <label htmlFor="marca">Marca</label><span className="text-danger">*{errors.marca?.message}</span>
                                <input id="marca" type="text" className="form-control" placeholder="Marca"  name="marca" value={values.marca || ""} onChange={handler} ref={register} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="modelo">Modelo</label><span className="text-danger">*{errors.modelo?.message}</span>
                                <input id="modelo" type="text" className="form-control" placeholder="Modelo"  name="modelo" value={values.modelo || ""} onChange={handler} ref={register} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="estilo">Estilo</label><span className="text-danger">*{errors.estilo?.message}</span>
                                <input id="estilo" type="text" className="form-control" placeholder="Estilo"  name="estilo" value={values.estilo || ""} onChange={handler} ref={register} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="talle">Talle</label><span className="text-danger">*{errors.estilo?.message}</span>
                                <input id="talle" type="text" className="form-control" placeholder="Talle"  name="talle" value={values.talle || ""} onChange={handler} ref={register} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rodado">Rodado</label><span className="text-danger">*{errors.rodado?.message}</span>
                                <input id="rodado" type="text" className="form-control" placeholder="Rodado"  name="rodado" value={values.rodado || ""} onChange={handler} ref={register} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción</label><span className="text-danger">*{errors.descripcion?.message}</span>
                                <textarea class="form-control" name="descripcion"  placeholder="Descripción del producto" value={values.descripcion || ""} onChange={handler} ref={register} ></textarea> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio</label><span className="text-danger">*{errors.precio?.message}</span>
                                <input id="precio" type="text" className="form-control" placeholder="Precio"  name="precio" value={values.precio || ""} onChange={handler} ref={register} />
                            </div>
                            
                            <Button type="submit" className="btn btn-warning btn-lg btn-block boton">
                            EDITAR
                            </Button>
                            <Button type="submit" className="btn btn-danger btn-lg btn-block boton" >
                                <Link to={'/administrar'} style={{color:'white'}}> Volver </Link>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            
            
            
        </>
    );
};

export default Edit;

/*<div className="row col-12 mt-5 mb-5 justify-content-center">
                <div className="col-sm-8 col-md-8 col-lg-4 col-xl-4">
                    
                </div>
            </div>*/

/* <div className="custom-file">
                            <input type="file" id="imagen" className="custom-file-input" placeholder="Imagen del Producto"  name="imagen" value={values.imagen || ""} onChange={handler} ref={register} />
                            <label htmlFor="imagen" className="custom-file-label">Imagen del Producto</label><span className="text-danger">*</span>   
                        </div>  */

                       /* const [values, handler, setValues] = useCustomForm();

                        const {register, handleSubmit, errors} = useForm({});
                    
                        const addEditProduct = async (productObject) => {
                            try {
                                await db.collection('products').doc(values).update(productObject);
                                toast('Producto Editado!!!', {
                                            type: "warning",
                                            autoClose: 2000
                                })
                                setValues('') 
                            } catch (error) {
                                console.error(error)
                            }
                            
                        }
                    
                        const update = (e) => {
                            console.log('Producto Editado!!!');
                            console.log(e.marca, e.modelo);
                            addEditProduct(values)
                            setValues({});
                        }
                    
                    
                    
                        const getProductById = async (id) => {
                            const doc = await db.collection('products').doc(id).get();
                            setValues({...doc.data()})
                        }
                    
                        useEffect(() => {
                            getProductById(values)
                            
                        }, [])*/



