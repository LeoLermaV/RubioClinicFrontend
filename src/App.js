import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Oftalmologia from './components/pages/Oftalmologia';
import Rehabilitacion from './components/pages/Rehabilitacion';
import {Contactanos} from './components/pages/Contactanos';
import Lasik from './components/pages/Lasik';
import Retina from './components/pages/Retina';
import Footer from './components/footer';
import Cataratas from './components/pages/Cataratas';
import Estravismo from './components/pages/Estravismo';
import AdminPage from './components/pages/Admin';
import Login from './components/pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router basename="/" >
      <Navbar />
      <Switch>
        <Route path='/rubiowebsite' exact component={Inicio} />
        <Route path='/' exact component={Inicio} />
        <Route path='/oftalmologia' component={Oftalmologia} />
        <Route path='/rehabilitacion' component={Rehabilitacion} />
        <Route path='/contacto' component={Contactanos} />
        <Route path='/lasik' component={Lasik} />
        <Route path='/retina' component={Retina} />
        <Route path='/cataratas' component={Cataratas} />
        <Route path='/estravismo' component={Estravismo} />
        <ProtectedRoute exact path='/admin' component={AdminPage} />
        <Route path='/login' component={Login} />
      </Switch>
       <Footer />
    </Router>
  );
}

export default App;
