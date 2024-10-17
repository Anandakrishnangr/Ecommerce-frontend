import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { FormElements } from './pages'
import { Registration } from './pages/bussinessUsers/Registration'
import { Login } from './pages/bussinessLogin/login'

export const Routes = () => {
  return (
    <div>
       <ReactRoutes>
        <Route path='/form-element' element={<FormElements/>}></Route>
        <Route path='/registration' element = {<Registration/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>

       </ReactRoutes>
    </div>
  )
}
