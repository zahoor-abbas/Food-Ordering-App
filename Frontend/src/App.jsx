import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import StoreContextProvider from "./context/StoreContext";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/Loginpopup/LoginPopup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./Pages/verify/Verify";
import MyOrders from "./Pages/MyOrders/MyOrders";
function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <Router>
      <ToastContainer />

      <StoreContextProvider>

        {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin= {setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<PlaceOrder />}></Route>
            <Route path="/verify" element={<Verify />}></Route>
            <Route path="/myorders" element={<MyOrders />}></Route>


          </Routes>
        </div>
        <Footer />

      </StoreContextProvider>
    </Router>
  );
}

export default App;
