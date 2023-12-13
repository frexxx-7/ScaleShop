import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ContentAdminPanel.module.scss'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const MainAdminPanel = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.AdminPanel}>
      <div className={classes.buttonDiv} onClick={() => navigate('/addScale')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <p className={classes.buttonP}>Добавить весы</p>
      </div>
    </div>
  )
}

export default MainAdminPanel