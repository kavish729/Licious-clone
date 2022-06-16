import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import RequireAuth from "./components/RequireAuth";
import Signup from "./components/signup/Signup";
import Payment from  "./components/payment/Payment"
import Otp from "./components/otp/Otp"
import Suc from "./components/Suc.jsx" 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/checkout" element = {<Checkout/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/otpverification" element={<Otp/>}/>
       <Route path="/success" element={<Suc/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
