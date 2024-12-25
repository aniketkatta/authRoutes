import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ProductManager from './pages/productManager/ProductManager'
import ProductDashboard from './pages/productManager/ProductDashboard'
import Product from './pages/productManager/Product'
import PlatformUser from './pages/platformUser/PlatformUser'
import PlatformDashboard from './pages/platformUser/PlatformDashboard'
import CompanyList from './pages/platformUser/CompanyList'
import UnAuthPage from './pages/UnAuthPage'
import CheckAuth from './components/common/CheckAuth'
import CompanyUser from './pages/companyUser/CompanyUser'
import NotFound from './pages/NotFound'

function App() {

  const token=localStorage.getItem('token');
  const userRole=localStorage.getItem('userRole')
  const navigate = useNavigate();



  return (
    <div>
        <Routes>

          <Route path='/' element={<CheckAuth token={token} userRole={userRole}></CheckAuth>} />
          <Route path='/auth' element={
            <CheckAuth token={token} userRole={userRole}>
              <AuthLayout />
            </CheckAuth>
            }>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route path='/productManager' element={
            <CheckAuth token={token} userRole={userRole}>
              <ProductManager/>
            </CheckAuth>
            }>
            <Route path='dashboard' element={<ProductDashboard />} />
            <Route path='product' element={<Product/>} />
          </Route>

          <Route path='/platformUser' element={
            <CheckAuth token={token} userRole={userRole}>
              <PlatformUser/>
            </CheckAuth>
            }>
            <Route path='dashboard' element={<PlatformDashboard />} />
            <Route path='company' element={<CompanyList/>} />
          </Route>

          <Route path='/companyUser' element={<CheckAuth token={token} userRole={userRole}><CompanyUser /></CheckAuth>} />

          <Route path='/unauth' element={<UnAuthPage />} />
          <Route path='*' element={<NotFound />} /> 
        </Routes>
    </div>
  )
}

export default App



