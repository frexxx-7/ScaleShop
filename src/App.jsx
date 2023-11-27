import { useState } from 'react'
import { useStateContext } from './context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import MyHeader from './components/Header/MyHeader'
import Footer from './components/Footer/Footer'

function App() {
  const { adminInfo, user } = useStateContext()


  return (
    <BrowserRouter>
      {
      adminInfo && user &&
        adminInfo.username == user.name
          ?
          adminInfo.email == user.email
            ?
            <AdminPanel />
            :
            ""
          :
          ""

      }
      <MyHeader />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
