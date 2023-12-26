import React from 'react'
import classes from './AdminPanel.module.scss'
import { useLocation } from 'react-router-dom';
import MainAdminPanel from './ContentAdminPanel/MainAdminPanel';
import ForAllAdminPanel from './ContentAdminPanel/ForAllAdminPanel';
import ProfileAdminPanel from './ContentAdminPanel/ProfileAdminPanel';
import AddScaleAdminPanel from './ContentAdminPanel/AddScaleAdminPanel';
import AddCategoryAdminPanel from './ContentAdminPanel/AddCategoryAdminPanel';

const AdminPanel = () => {
  const location = useLocation()

  const switchPath = (pathname) => {
    switch (pathname) {
      case "/main":
        return <MainAdminPanel />
      case "/profile":
        return <ProfileAdminPanel />
      case "/addScale":
        return <AddScaleAdminPanel />
      case "/addCategoryScale":
        return <AddCategoryAdminPanel />
      default:
        return <ForAllAdminPanel />
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