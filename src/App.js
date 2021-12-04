import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClickTracker } from './components/ClickTracker/Contador';

function App() {


  return (
    <div>
      <NavBar/>
      <ClickTracker/>
    </div>
  );
}

export default App;


