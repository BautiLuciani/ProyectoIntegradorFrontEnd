import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAcountPage from '../auth/pages/CreateAcountPage'
import LoginPage from '../auth/pages/LoginPage'
import HomePage from '../autos/pages/HomePage'
import ProductPage from '../autos/pages/ProductPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />

        <Route path="/*" element={<HomePage />} />

        <Route path="producto/:id" element={<ProductPage/>}/>

        <Route path="login" element={<LoginPage />} />

        <Route path="acount" element={<CreateAcountPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
