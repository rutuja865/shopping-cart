import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import Cart from './pages/Cart';  // No curly braces
import { Login } from './components/dashboard/profile/Login';
import { Registration } from './components/dashboard/profile/Registration';
import { ForgotPassword } from './components/dashboard/profile/ForgotPassword';
import { BannerCorousal } from './pages/BannerCorousal';
import { ProductDetails } from './components/ProductDetails';
import Footer from './components/Footer'; // Import Footer
import Trial from './components/Trail';

const App = () => {
  const location = useLocation(); // Get current location

  // Check if the current route is Login, Registration, or Forgot Password
  const noFooterPaths = ["/login", "/registration", "/forgotPassword"];

  // Footer should not be shown on the above pages
  const showFooter = !noFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/bannerCarousal" element={<BannerCorousal />} />
          <Route path='/trial' element={<Trial/>}/>
        </Routes>
      </div>
      {showFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
};

export default App;
