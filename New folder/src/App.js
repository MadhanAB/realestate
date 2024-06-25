//import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Homepage from './Homepage/Homepage';
import Building from './Building/Building';
import Basement from './Basement/Basement';
import { Dream } from './Dreamproperty/Dreamproperty';
import Apartment from './Apartments/Apartment';

function App() {
  return (
    <div className="App">
     <Home/>
     <Homepage/>
     <Building/>
     <Basement/>
     <Dream/>
     <Apartment/>
    </div>
  );
}

export default App;
