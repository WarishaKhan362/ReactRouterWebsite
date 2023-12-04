import logo from './logo.svg';
import './App.css';
import Services from './component/Services';
import Blogs from './component/Blogs';
import Contacts from './component/Contacts'
import Navbar from './component/Navbar';
import Bike  from './component/Bike';
import Car from './component/Car';
// import About from './component/About';
// import Home from './component/Home';
import { Routes, Route, BrowserRouter,Link } from 'react-router-dom';
import Festivals from './component/Festivals';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    
   <Routes>

    {/* <Route path='/' element={<Home/>} /> */}
    {/* <Route path='/about' element={<About/>} /> */}
    <Route path='/services' element={<Services/>} />
    <Route path='/blogs' element={<Blogs/>} />
    <Route path='/contacts' element={<Contacts/>} />
    <Route path='/bike' element={<Bike/>} />
    <Route path='/car' element={<Car/>} />
    <Route  path='/festivals' element={<Festivals></Festivals>}/>

  

    {/* <Route path='*' element={<Error/>} /> */}
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
