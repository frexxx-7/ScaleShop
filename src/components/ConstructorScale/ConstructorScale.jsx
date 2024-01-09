import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ConstructorScale.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const ConstructorScale = ({dataScale, setSumBasket, sumBasket, number}) => {

  useEffect(()=>{
    setSumBasket(sumBasket + dataScale.sumPrice)
  },[])

  return (
    <div className={classes.ScaleBasket}>
      <div className={classes.scaleBasketContainer}>

        <div className={classes.scaleInfo}>
          <div className={classes.scaleTitle}>
            <p>Конструктор {number}</p>
          </div>
          <div className={classes.scalePrice}>
            <p>{dataScale && dataScale.sumPrice} Br</p>
          </div>
        </div>
        <div className={classes.deleteScaleContainer}>
          <div className={classes.deleteScale}>
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstructorScale