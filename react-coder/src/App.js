import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
