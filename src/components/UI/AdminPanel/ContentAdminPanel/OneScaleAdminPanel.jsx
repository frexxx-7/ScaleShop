import { faHouse, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ContentAdminPanel.module.scss'

const OneScaleAdminPanel = ({idScale}) => {
  const navigate = useNavigate()

  return (
    <div className={classes.AdminPanel}>
      <div className={classes.buttonDiv} onClick={() => navigate('/main')}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <p className={classes.buttonP}>Главная</p>
      </div>

      <div className={classes.buttonDiv} onClick={() => navigate(`/editScale/${idScale}`)}>
        <div className={classes.iconDiv}>
          <FontAwesomeIcon icon={faPen} />
        </div>
        <p className={classes.buttonP}>Редактироть</p>
      </div>
    </div>
  )
}

export default OneScaleAdminPanel