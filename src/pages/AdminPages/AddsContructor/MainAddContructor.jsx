import React from 'react'
import classes from './AddConstructor.module.scss'
import { useNavigate } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainAddContructor = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.mainAddConstructor}>
      <div className={classes.mainAddConstructorContainer}>
        <div className={classes.buttons}>
          <div className={classes.buttonDiv} onClick={() => navigate('/addPlatform')}>
            <div className={classes.iconDiv}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <p className={classes.buttonP}>Добавить платформу</p>
          </div>
          <div className={classes.buttonDiv} onClick={() => navigate('/addNPV')}>
            <div className={classes.iconDiv}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <p className={classes.buttonP}>Добавить НПВ</p>
          </div>
          <div className={classes.buttonDiv} onClick={() => navigate('/addMaterial')}>
            <div className={classes.iconDiv}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <p className={classes.buttonP}>Добавить материал</p>
          </div>
          <div className={classes.buttonDiv} onClick={() => navigate('/addIndicator')}>
            <div className={classes.iconDiv}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <p className={classes.buttonP}>Добавить идикатор</p>
          </div>
          <div className={classes.buttonDiv} onClick={() => navigate('/addSrainGauge')}>
            <div className={classes.iconDiv}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <p className={classes.buttonP}>Добавить тензодатчик</p>
          </div>
          <div className={classes.buttonDiv} onClick={() => navigate('/addFastening')}>
            <div className={classes.iconDiv}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <p className={classes.buttonP}>Добавить крепление</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAddContructor