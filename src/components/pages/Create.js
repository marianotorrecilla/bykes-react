import React, {useState , useEffect } from 'react';
import { app } from '../../base';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import {toast} from 'react-toastify';
import './Create.css'

const db = app.firestore()


const Create = () => {
  const [fileUrl, setFileUrl] = useState()
  const [products, setProducts] = useState([])

  const onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  const onSubmit = (e) => {
        const marca = e.target.marca.value;
        const modelo = e.target.modelo.value;
        const estilo = e.target.estilo.value;
        const talle = e.target.talle.value;
        const rodado = e.target.rodado.value;
        const descripcion = e.target.descripcion.value;
        const precio = e.target.precio.value;
        
        db.collection('products').doc().set({
            
            marca: marca,
            modelo: modelo,
            estilo: estilo,
            talle: talle,
            rodado: rodado,
            descripcion: descripcion,
            precio: precio,
            file: fileUrl
        })
        toast('Producto Creado!', {
            type: "success",
            autoClose: 2000
        })
        
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = await db.collection('products').get()
      setProducts(productCollection.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchProducts()
  }, [])

  





  return (
    <>
      <div className="row col-12 mt-5 mb-5 justify-content-center">
        <div className="col-sm-8 col-md-8 col-lg-4 col-xl-4">
          <h3 className="text-center mt-5">CREAR PRODUCTO</h3>
          <Form onSubmit={onSubmit}>
            
            
            <div className="form-group">
                                <label htmlFor="marca">Marca</label><span className="text-danger">*</span>
                                <input id="marca" type="text" className="form-control" placeholder="Marca"  name="marca"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="modelo">Modelo</label><span className="text-danger">*</span>
                                <input id="modelo" type="text" className="form-control" placeholder="Modelo"  name="modelo"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="estilo">Estilo</label><span className="text-danger">*</span>
                                <input id="estilo" type="text" className="form-control" placeholder="Estilo"  name="estilo"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="talle">Talle</label><span className="text-danger">*</span>
                                <input id="talle" type="text" className="form-control" placeholder="Talle"  name="talle"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rodado">Rodado</label><span className="text-danger">*</span>
                                <input id="rodado" type="text" className="form-control" placeholder="Rodado"  name="rodado"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción</label><span className="text-danger">*</span>
                                <textarea class="form-control" name="descripcion"  placeholder="Descripción del producto"  ></textarea> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="precio">Precio</label><span className="text-danger">*</span>
                                <input id="precio" type="text" className="form-control" placeholder="Precio"  name="precio" />
                            </div>
                            <div className="custom-file">
                                <input type="file" id="imagen" className="custom-file-input" placeholder="Imagen del Producto"  name="file" onChange={onFileChange}  />
                                <label htmlFor="file" className="custom-file-label">Imagen del Producto</label><span className="text-danger">*</span>   
                            </div>
                            <Button type="submit" className="btn btn-success btn-lg btn-block boton">
                                CREAR
                            </Button>
                            <Button type="submit" className="btn btn-danger btn-lg btn-block boton" >
                                <Link to={'/administrar'} style={{color:'white'}}> Volver </Link>
                            </Button>
            
          </Form>
        </div>
      </div>
      
      
    </>
  );
}

export default Create;
