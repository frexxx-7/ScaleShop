import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './ContentAdminPanel.module.scss'
import { faHouse, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const ConstructorAdminPanel = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.AdminPanel}>
      <div className={classes.buttonDiv} onClick={() => navigate('/main')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <p className={classes.buttonP}>Главная</p>
      </div>
      <div className={classes.buttonDiv} onClick={() => navigate('/addsConstructor')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <p className={classes.buttonP}>Добавить</p>
      </div>
    </div>
  )
}

export default ConstructorAdminPanel