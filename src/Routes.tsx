import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { FormElements } from './pages'
import { Registration } from './pages/bussinessUsers/Registration'
import { Login } from './pages/bussinessLogin/login';
import { Password } from './pages/bussinessLogin/password';
import { LoginOtp } from './pages/loginOtp'
import { UpdateTaxDetail } from './pages/updateTaxDetails';




export const Routes = () => {
  return (
    <div>
      <ReactRoutes>
        <Route path="/form-element" element={<FormElements />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/loginotp" element={<LoginOtp />} />
        <Route path='/updatetaxdetail' element={<UpdateTaxDetail />} />
      </ReactRoutes>
    </div>
  );
}
