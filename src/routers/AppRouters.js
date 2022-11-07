import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Components/header';
import Signup from '../Components/signup';
import Bresecose from '../Components/bresecose';
import Login from '../Components/login';
import Order from '../Components/order';


const AppRouter = () => {
  return (
      <BrowserRouter>
      <div>
      <Header></Header>
      <Routes>
          <Route exact path = "/" element={<Bresecose/>}></Route> 
          <Route  path = "/login" element= {<Login/>}></Route> 
          <Route  path = "/signup" element = {<Signup/>}></Route> 
          <Route path = "/order" element = {<Order/>}></Route>
          
       </Routes>
      </div>
   </BrowserRouter>
          
  );
};
export default AppRouter;