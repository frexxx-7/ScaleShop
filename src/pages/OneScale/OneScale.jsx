import React from 'react'
import classes from './OneScale.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const OneScale = ({ scaleInfo }) => {
  console.log(scaleInfo);
  return (
    <div className={classes.OneScaleMain}>
      <div className={classes.OneScaleContainer}>
        <div className={classes.imageDiv}>
          <img src={scaleInfo && scaleInfo.image} alt="image scale" className={classes.scaleImage} />

        </div>
        <div className={classes.infoScale}>
          <div className={classes.titleScale}>
            <p className={classes.titile}>{scaleInfo && scaleInfo.title}</p>
          </div>
          <div className={classes.priceDiv}>
            <p className={classes.price}>{scaleInfo && scaleInfo.price} Br</p>
            <div className={classes.buttonDiv}>
              <button className={classes.scaleButton}>
                <p>В корзину</p>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
          <div className={classes.desctiptioinScaleDiv}>
            <p className={classes.desctiptioinScale}>{scaleInfo && scaleInfo.content}</p>
          </div>
          <div className={classes.categoryDIv}>
            <p className={classes.category}>Категория: {scaleInfo && scaleInfo.categoryName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneScale