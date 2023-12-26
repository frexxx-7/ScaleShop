import { faHouse, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ContentAdminPanel.module.scss'

const AddCategoryAdminPanel = () => {
  const navigate = useNavigate()

  return (

    <div className={classes.AdminPanel}>
      <div className={classes.buttonDiv} onClick={() => navigate('/main')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <p className={classes.buttonP}>Главная</p>
      </div>

      <div className={classes.buttonDiv} onClick={() => navigate('/addScale')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <p className={classes.buttonP}>Добавить весы</p>
      </div>
    </div>
  )
}

export default AddCategoryAdminPanel