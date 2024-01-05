import React, { useEffect, useState } from 'react'
import classes from './Basket.module.scss'
import BasketScale from '../../components/BasketScale/BasketScale'
import axiosCLient from '../../axios.client'
import { useStateContext } from '../../context/ContextProvider'
import ScaleInBasket from '../../components/ScaleInBasket/ScaleInBasket'

const Basket = () => {
  const { user } = useStateContext()
  const [scalesInfo, setScalesInfo] = useState()

  const loadInfoBasketScales = () => {
    const payload = {
      idUser: user.id,
    }
    axiosCLient.post(`/loadInfoBasketScales`, payload)
      .then(({ data }) => {
        if (data) {
          setScalesInfo(data.result)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  useEffect(() => {
    if (Object.keys(user).length != 0)
      loadInfoBasketScales()
  }, [user])
  return (
    <div className={classes.Basket}>
      <div className={classes.basketContainer}>
        <div className={classes.title}>
          <p>Корзина</p>
        </div>
        <div className={classes.scalesContainer}>
          {scalesInfo && Object.keys(scalesInfo).map(key =>
            <ScaleInBasket ScaleInfo={scalesInfo[key]} key={key} />)}
        </div>
      </div>
    </div>
  )
}

export default Basket