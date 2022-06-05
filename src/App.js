import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/Signup';
import MensData from './components/mensdata/MensData';
import WomensData from './components/womensData/WomensData';
import Contact from './components/contact us/Contact';
import Product from './components/men product/Product';
import Women from './components/women product/Women';
import Cart from './components/cart page/Cart';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/MensData' element={<MensData />}></Route>
        <Route path='/WomensData' element={<WomensData />}></Route>
        <Route path='/mensdata/:id/:nameCls' element={<Product />}></Route>
        <Route path='/womensdata/:id/:nameCls' element={<Women />}></Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
