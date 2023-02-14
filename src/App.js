import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { CartWidget} from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Inicio } from './components/Pages/Inicio';
import { Info } from './components/Pages/Info';
import { Productos } from './components/Pages/Productos';
import { Form } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>

    </div>
  );
}

export default App;
