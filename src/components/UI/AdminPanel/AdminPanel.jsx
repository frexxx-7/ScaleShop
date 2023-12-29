import React from 'react'
import classes from './AdminPanel.module.scss'
import { useLocation } from 'react-router-dom';
import MainAdminPanel from './ContentAdminPanel/MainAdminPanel';
import ForAllAdminPanel from './ContentAdminPanel/ForAllAdminPanel';
import ProfileAdminPanel from './ContentAdminPanel/ProfileAdminPanel';
import AddScaleAdminPanel from './ContentAdminPanel/AddScaleAdminPanel';
import AddCategoryAdminPanel from './ContentAdminPanel/AddCategoryAdminPanel';
import OneScaleAdminPanel from './ContentAdminPanel/OneScaleAdminPanel';

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
      case "/" + (pathname.match(/scale\/.*/) && pathname.match(/scale\/.*/)[0]):
        return <OneScaleAdminPanel idScale={pathname.match(/scale\/.*/) && pathname.split('/')[pathname.split('/').length - 1]}/>
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