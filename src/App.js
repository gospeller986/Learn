import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes ,
  
} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Service from './Pages/Service';
import Navbar from "./Components/Navbar";

function App() {
  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
      
      </Routes>
     </BrowserRouter>
  );
}

export default App;
