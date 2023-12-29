import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Scales.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Scales = ({dataScale}) => {
  const navigate = useNavigate()
  return (
    <div className={classes.ScaleMain}>
      <div className={classes.scaleProductContent}>
        <div className={classes.scalseImage}>
          <img src={dataScale && dataScale.image} alt="scale image" />
        </div>
        <div className={classes.scaleTitleContainer}>
          <p className={classes.scaleTitile} onClick={()=> navigate(`/scale/${dataScale && dataScale.id}`)}>{dataScale && dataScale.title}</p>
        </div>
        <div className={classes.sclaePriceContainer}>
          <p className={classes.scalePrice}>{dataScale && dataScale.price} Br</p>
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