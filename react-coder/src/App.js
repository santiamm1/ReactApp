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
        <div>
          <ItemListContainer function={() => console.log('En progreso')} label='Página en progreso'/>
          <ItemListContainer function={() => console.log('En progreso')} label='Aguarde un momento'/>
          <ItemList/>
          <ItemDetailContainer/>
          <ItemCount/>
        </div>
      </body>
    </div>
  )
}

export default App
