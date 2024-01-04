import React from 'react'
import classes from './Basket.module.scss'
import BasketScale from '../../components/BasketScale/BasketScale'

const Basket = () => {
  return (
    <div className={classes.Basket}>
      <div className={classes.basketContainer}>
        <div className={classes.title}>
          <p>Корзина</p>
        </div>
        <div className={classes.scalesContainer}>
          <BasketScale />
        </div>  
      </div>
    </div>
  )
}

export default Basket