import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import ProductInd from './components/pages/ProductInd';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
import List from './components/pages/List';
import Footer from './components/layout/Footer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={ProductInd} /> 
        <Route path="/administrar" exact component={List} />
        <Route path="/administrar/create" exact component={Create} />
        <Route path="/administrar/edit/:id" exact component={Edit} />
       
        <ToastContainer/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
