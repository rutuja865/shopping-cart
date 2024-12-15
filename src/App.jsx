
import './App.css';
import {Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import Cart from './pages/Cart';  // No curly braces
import { Login } from './components/dashboard/profile/Login';
import { Registration } from './components/dashboard/profile/Registration';
import { ForgotPassword } from './components/dashboard/profile/ForgotPassword';
import { BannerCorousal } from './pages/BannerCorousal';


const App = () => {
  return (
   <div>
      <Navbar/>
    <div className="pt-16">
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/login" element={<Login/>} />
<Route path="/registration" element={<Registration/>} />
<Route path="/forgotPassword" element={<ForgotPassword/>} />
<Route path="/bannerCarousal" element={<BannerCorousal/>} />
    </Routes>
    </div>
   </div>
  );
}

export default App;
