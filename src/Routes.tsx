import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { FormElements } from './pages'
import { Registration } from './pages/bussinessUsers/Registration'

export const Routes = () => {
  return (
    <div>
       <ReactRoutes>
        <Route path='/form-element' element={<FormElements/>}></Route>
        <Route path='/registration' element = {<Registration/>}></Route>
       </ReactRoutes>
    </div>
  )
}
