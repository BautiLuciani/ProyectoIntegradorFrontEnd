import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAcountPage from '../auth/pages/CreateAcountPage'
import LoginPage from '../auth/pages/LoginPage'
import FiltroCategoria from '../autos/pages/FiltroCategoria'
import FiltroCiudad from '../autos/pages/FiltroCiudad'
import HomePage from '../autos/pages/HomePage'
import ProductPage from '../autos/pages/ProductPage'
import ReservasPage from '../autos/pages/ReservasPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />

        <Route path="/*" element={<HomePage />} />

        <Route path="producto/:id" element={<ProductPage/>}/>

        <Route path="producto/ciudad" element={<FiltroCiudad/>} />

        <Route path="producto/categoria" element={<FiltroCategoria/>} />

        <Route path='producto/:id/reserva' element={<ReservasPage/>}/>

        <Route path="login" element={<LoginPage />} />

        <Route path="acount" element={<CreateAcountPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
