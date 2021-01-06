import './App.css';
import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
import Loading from './components/layout/Loading';
const List = lazy(() => import("./components/pages/List"))


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/administrar" exact component={List} />
          </Switch> 
        </Suspense> 
        
        <Route path="/administrar/create" exact component={Create} />
        <Route path="/administrar/edit/:id" exact component={Edit} />
       
        <ToastContainer/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
