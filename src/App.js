import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClickTracker } from './components/ClickTracker/Contador';
import { Clock } from './components/reloj/Clock';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <div>
      <NavBar/>
      <ClickTracker/>
      <Clock/>
      <ItemListContainer/>
    </div>
  );
}

export default App;


