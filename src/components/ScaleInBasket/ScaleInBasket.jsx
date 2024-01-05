import React, { useState } from 'react'
import classes from './ScaleInBasket.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from '../../context/ContextProvider';
import { useEffect } from 'react';
import axiosCLient from '../../axios.client';
import { useNavigate } from 'react-router-dom';

const ScaleInBasket = ({ ScaleInfo }) => {
  const { user } = useStateContext()
  const [basketScaleInfo, setBasketScaleInfo] = useState({})
  const [count, setCount] = useState(1)

  const navigate = useNavigate()

  const loadInfoScaleInBasket = () => {
    const payload = {
      idUser: user.id,
      idScale: ScaleInfo.id,
    }
    axiosCLient.post(`/infoScaleScaleInBasket`, payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          setBasketScaleInfo(data.basket[0])
          setCount(data.basket[0].count)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  const editScaleToDB = (count) => {
    const payload = {
      idUser: user.id,
      idScale: ScaleInfo.id,
      count: count,
      purchased: false
    }
    if (basketScaleInfo || Object.keys(basketScaleInfo).length != 0)
      axiosCLient.post(`/editScaleToBasket/${basketScaleInfo.id}`, payload)
        .then(({ data }) => {
          if (data) {
            loadInfoScaleInBasket()
          }
        })
        .catch(err => {
          console.log(err.response);
          const response = err.response
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
  }
  useEffect(() => {
    if (Object.keys(user).length != 0) {
      loadInfoScaleInBasket()
    }
  }, [user])
  useEffect(() => {
    if (basketScaleInfo && Object.keys(basketScaleInfo).length !== 0) {
      setCount(basketScaleInfo.count)
    }
  }, [basketScaleInfo])

  return (
    <div className={classes.ScaleBasket}>
      <div className={classes.scaleBasketContainer}>
        <div className={classes.ScaleImage}>
          <img src={ScaleInfo && ScaleInfo.image} alt="image" />
        </div>
        <div className={classes.scaleInfo}>
          <div className={classes.scaleTitle}>
            <p onClick={()=> navigate(`/scale/${ScaleInfo.id}`)}>{ScaleInfo && ScaleInfo.title}</p>
          </div>
          <div className={classes.scalePrice}>
            <p>{ScaleInfo && ScaleInfo.price} Br</p>
          </div>
          <div className={classes.buttonPlusMinus}>
            <button className={classes.buttonMinus} onClick={() => {
              if (count <= 1) {
                editScaleToDB(0)
              } else
                editScaleToDB(count - 1)
            }}><FontAwesomeIcon icon={faMinus} /></button>
            <p className={classes.countInBasket}>{count}</p>
            <button className={classes.buttonPlus} onClick={() => {
              editScaleToDB(count + 1)
            }}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        </div>
        <div className={classes.deleteScaleContainer}>
            <div className={classes.deleteScale}>
              <FontAwesomeIcon icon ={faX} />
            </div>
            <div className={classes.sumPriceScaleInPrice}>
              <p>{ScaleInfo && + count * +ScaleInfo.price} Br</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ScaleInBasket