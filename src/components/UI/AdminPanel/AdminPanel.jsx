import React from 'react'
import classes from './AdminPanel.module.scss'
import { useLocation } from 'react-router-dom';
import MainAdminPanel from './ContentAdminPanel/MainAdminPanel';
import ForAllAdminPanel from './ContentAdminPanel/ForAllAdminPanel';
import ProfileAdminPanel from './ContentAdminPanel/ProfileAdminPanel';

const AdminPanel = () => {
  const location = useLocation()

  const switchPath = (pathname) => {
    switch (pathname) {
      case "/main":
        return <MainAdminPanel />
      case "/profile":
        return <ProfileAdminPanel/>
      default:
        return <ForAllAdminPanel />
        break;
    }
  }
  return (
    <div className={classes.AdminPanel}>
      {switchPath(location.pathname)
      }
    </div>
  )
}

export default AdminPanel