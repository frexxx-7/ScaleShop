import React from 'react'
import classes from './HistoryOrders.module.scss'

const HistoryOrders = () => {
  return (
    <div className={classes.HistoryContainer}>
      <div className={classes.titile}>
        <h1>История заказов</h1>
      </div>
      <div className={classes.historyContent}>
        <p>Вы не сделали ниодного заказа</p>
      </div>
    </div>
  )
}

export default HistoryOrders