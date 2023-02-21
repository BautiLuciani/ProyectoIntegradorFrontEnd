import React from 'react'
import AuthProvider from './auth/context/AuthProvider'
import AppRouter from './routes/AppRouter'
import Body from './ui/components/Body'
import Footer from './ui/components/Footer'
import Header from './ui/components/Header'
import Navbar from './ui/components/Navbar'

const AutosApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default AutosApp