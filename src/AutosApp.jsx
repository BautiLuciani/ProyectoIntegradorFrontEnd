import React from 'react'
import AppRouter from './routes/AppRouter'
import { ContextProvider } from './context/globalContext'

const AutosApp = () => {
  return (
    <ContextProvider>
      <AppRouter/>
    </ContextProvider>
  )
}

export default AutosApp