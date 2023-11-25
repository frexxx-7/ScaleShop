import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Scales.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Scales = () => {
  return (
    <div className={classes.ScaleMain}>
      <div className={classes.scaleProductContent}>
        <div className={classes.scalseImage}>
          <img src="./slider-1.jpeg" alt="scale image" />
        </div>
        <div className={classes.scaleTitleContainer}>
          <p className={classes.scaleTitile}>Весы</p>
        </div>
        <div className={classes.sclaePriceContainer}>
          <p className={classes.scalePrice}>59 Br</p>
        </div>
        <div className={classes.scaleButtonContainer}>
          <button className={classes.scaleButton}>
            <p>В корзину</p>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Scales