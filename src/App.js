//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home/Home';
import Homepage from './Homepage/Homepage';
import Building from './Building/Building';
import Basement from './Basement/Basement';
import {Dream}  from './Dreamproperty/Dreamproperty';
import Apartment from './Apartments/Apartment';
import About from './About/About';
import Service from './Service/Service';
import Choose from './Choose/Choose';
import Contact from './Contact/Contact';
import Whole from './Whole/Whole';
import Villa from './Villa/Villa';
import Plots from './Plots/Plots';
import { Routes,Route} from 'react-router-dom';
import Registered from './RegisterdUser/Registeruser';

function App() {
  return (
    <div className="App">
        {/* <Home/>
     <Homepage/>
     <Building/>
     <Basement/>
     <Dream/>
     <About/>
     <Service/>
     <Choose/>
     <Contact/> */}
      <Routes>
        <Route path='/'element={<Whole/>}/>
     <Route path=''element={<Home/>}/>
     <Route path=''element={<Homepage/>}/>
     <Route path=''element={<Building/>}/>

      <Route path=''element={<Basement/>}/>
      <Route path=''element={<Dream/>}/>
      <Route path='/Apartment'element={<Apartment/>}/>
     
     
    <Route path='/About' element={<About/>}/> 

    <Route path='/Villa' element={<Villa/>}/> 
    <Route path='/Plots' element={<Plots/>}/> 

    
    <Route path=''element={<Service/>}/>
    <Route path='/Choose' element={<Choose/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Registered'element={<Registered/>}/>
    
     </Routes>
   
    </div>
  );
}

export default App;
