
import './App.css';
import {Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import Cart from './pages/Cart';  // No curly braces
import { Login } from './components/dashboard/profile/Login';


const App = () => {
  return (
   <div>
    <div className="">
      <Navbar/>
    </div>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/login" element={<Login/>} />
    </Routes>
   </div>
  );
}

export default App;
