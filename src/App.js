import { useEffect, useState } from "react";
import {
  
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import Authprovider from './components/Authprovider/Authprovider';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ProtectedRoute from "./components/ProtectectedRoute/ProtectedRoute";
import Register from './components/Register/Register';
import Shipping from "./components/Shipping/Shipping";
import Shop from './components/Shop/Shop';
// import useAuth from './hooks/useAuth';
// import useFirebase from './hooks/useFirebase';

function App() {

  // const {loggedUser}=useFirebase();
  
          return (
    <div>
      
        <Authprovider>
        <Header></Header>
        <Routes>
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<OrderReview/>}/>
          
            <Route path="/inventory" element={
            
                            <ProtectedRoute  >
                              <Inventory/>
                            </ProtectedRoute>
                                            }/>

                <Route path="/shipping" element={
                            
                            <ProtectedRoute  >
                              <Shipping/>
                            </ProtectedRoute>
                                            }/>
              
            
          {/* <Route path="inventory" element={<Inventory/>} /> */}
          <Route path="/placeorder" element={<PlaceOrder/>  }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
           </Routes>
        </Authprovider>
    </div>
  );
}

export default App;
