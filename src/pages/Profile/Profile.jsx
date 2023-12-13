import React from 'react'
import classes from './Profile.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import HistoryOrders from './ProfilePages/HistoryOrders/HistoryOrders'
import Contacts from './ProfilePages/Contacts/Contacts'
import axiosCLient from '../../axios.client'
import { useStateContext } from '../../context/ContextProvider'

const Profile = () => {
  const { user, token, setUser, setToken } = useStateContext()
  const navigate = useNavigate()
  const location = useLocation()

  const switchPath = (pathname) => {
    switch (pathname) {
      case "/profile/orders":
        return <HistoryOrders />
      case "/profile/contacts":
        return <Contacts />
      default:
        return ""
    }
  }
  const onLogout = (ev) => {
    ev.preventDefault()

    axiosCLient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  return (
    <div className={classes.Profile}>
      <div className={classes.profileContainer}>
        <div className={classes.profileAside}>
          <div className={classes.oneLinkContainer}>
            <p className={classes.profileLink} onClick={() => navigate('/profile/orders')}>История заказов</p>
          </div>
          <div className={classes.oneLinkContainer}>
            <p className={classes.profileLink} onClick={() => navigate('/profile/contacts')}>Контактные данные</p>
          </div>
          <div className={classes.oneLinkContainer}>
            <p className={classes.profileLink} onClick={onLogout}>Выход</p>
          </div>
        </div>

        <div className={classes.profilePage}>
          {switchPath(location.pathname)}
        </div>
      </div>
    </div>
  )
}

export default Profile