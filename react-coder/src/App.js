import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <body>
        <ItemListContainer/>
      </body>
    </div>
  );
}

export default App;
