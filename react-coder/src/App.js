import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, {Component, useState } from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemList from './components/ItemList'

const App = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <body>
        <div>
          <ItemListContainer/>
        </div>
        <div>
          <ItemCount/>
        </div>
        <div>
          <ItemList/>
        </div>
      </body>
    </div>
  )
}

export default App
