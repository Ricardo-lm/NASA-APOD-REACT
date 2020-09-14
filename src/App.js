import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

  // Aqui se pone la ruta de los componentes que quiero que renderise la app. exact es para la home page y que no se confunda con otros /
    <BrowserRouter> 
      <div className="app">
        <Route component={Home} path="/" exact></Route>
        <Route component={NasaPhoto} path="/nasaphoto"></Route> 
      </div>
    </BrowserRouter>
  );
}

export default App;
