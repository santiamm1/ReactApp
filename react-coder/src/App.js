import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, {Component, useState } from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemList from './components/ItemList'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {

  const message = () => {

  }

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <body>
        <div className="card">
          <img className="card-img-top" src="https://energe.com.ar/wp-content/uploads/2020/10/FV1100-01-01.png" alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">
              <ItemListContainer function={() => console.log('En progreso')} label='Generador Fotovoltaico'/>
              <ItemListContainer function={() => console.log('En progreso')} label='Phoenix 1/1100'/>
            </h5>
            <p className="card-text">
              <ItemList/>
              <ItemDetailContainer/>
            </p>
            <a className="btn btn-primary">
              <ItemCount/>
            </a>
            <a className="btn btn-primary buy">Comprar
            </a>
          </div>
        </div>
      </body>
    </div>
  )
}

export default App
