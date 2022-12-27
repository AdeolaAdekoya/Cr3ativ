import { useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import './App.css';
import Landingpage from './Compnents/Landingpage';
import {Routes, Route} from 'react-router-dom';
// import Slider from './Compnents/Slider';
import ErrorPage from "./Compnents/ErrorPage"
import Footer from './Compnents/Footer';
import Navbar from './Compnents/Navbar';
import Slider from './Compnents/Slider';

function App() {

  const location = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [location])
  

  return (
    <div className="App">
{/* <Navbar/> */}
<Routes>
 <Route path="*" element={ <ErrorPage/>}/>  
<Route path="/" element={ <Landingpage/>}/>  
<Route path="/slider" element={ <Slider/>}/>  
        </Routes>
<Footer/>
  
    </div>
  );
}

export default App;
