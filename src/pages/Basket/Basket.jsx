import React, { useEffect, useState } from 'react'
import classes from './Basket.module.scss'
import axiosCLient from '../../axios.client'
import { useStateContext } from '../../context/ContextProvider'
import ScaleInBasket from '../../components/ScaleInBasket/ScaleInBasket'
import ConstructorScale from '../../components/ConstructorScale/ConstructorScale'

const Basket = () => {
  const { user } = useStateContext()
  const [scalesInfo, setScalesInfo] = useState()
  const [sumBasket, setSumBasket] = useState(0)
  const [infoBasket, setInfoBasket] = useState()
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

  const loadInfoCostructor = () => {
    axiosCLient.get(`/loadInfoConstructor/${user.id}`)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          setInfoBasket(data.constructors)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  useEffect(() => {
    if (Object.keys(user).length != 0) {
      loadInfoBasketScales()
      loadInfoCostructor()
    }
  }, [user])

  useEffect(() => {
    scalesInfo &&
      setSumBasket(Object.keys(scalesInfo).reduce((acc, key) => {
        return acc + (scalesInfo[key].countBasket * scalesInfo[key].price);
      }, 0))
  }, [scalesInfo])
  return (
    <div className={classes.Basket}>
      <div className={classes.basketContainer}>
        <div className={classes.title}>
          <p>Корзина</p>
        </div>
        <div className={classes.basketMainContainer}>
          <div className={classes.scalesContainer}>
            {scalesInfo && Object.keys(scalesInfo).map(key =>
              <ScaleInBasket setSumBasket={setSumBasket} sumBasket={sumBasket} ScaleInfo={scalesInfo[key]} key={key} />)}
            <div className={classes.title}>
              <p>Конструктор:</p>
            </div>
            {infoBasket && Object.keys(infoBasket).map(key =>
              <ConstructorScale setSumBasket={setSumBasket} sumBasket={sumBasket} dataScale={infoBasket[key]} number = {key} key={key} />)}
          </div>
          <div className={classes.sumBasket}>
            <div className={classes.sumBasketContainer}>
              <p className={classes.resultSum}>Итого к оплате: {sumBasket} Br</p>
              <button className={classes.payButton}>Оплатить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket