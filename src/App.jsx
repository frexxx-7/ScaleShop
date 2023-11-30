import { useStateContext } from './context/ContextProvider'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import MyHeader from './components/Header/MyHeader'
import Footer from './components/Footer/Footer'
import AdminPanel from './components/UI/AdminPanel/AdminPanel'

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
