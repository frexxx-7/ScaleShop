import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Scales.module.scss'
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import { useEffect } from 'react'
import axiosCLient from '../../axios.client'

const Scales = ({ dataScale }) => {
  const { user } = useStateContext()
  const [visivlePulsMinusButton, setVisiblePlusMinusButton] = useState(false)
  const [count, setCount] = useState(1)
  const [basketScaleInfo, setBasketScaleInfo] = useState({})
  const navigate = useNavigate()

  const loadInfoScaleInBasket = () => {
    const payload = {
      idUser: user.id,
      idScale: dataScale.id,
    }
    axiosCLient.post(`/infoScaleScaleInBasket`, payload)
      .then(({ data }) => {
        if (data) {
          setBasketScaleInfo(data ? data.basket[0] : {})
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  const addedEditScaleToDB = () => {
    const payload = {
      idUser: user.id,
      idScale: dataScale.id,
      count: count,
      purchased: false
    }
    Object.keys(basketScaleInfo || {}).length == 0 ?
      axiosCLient.post('/addScaleToBasket', payload)
        .then(({ data }) => {
          if (data) {
            setBasketScaleInfo(data ? data.basket[0] : {})
          }
        })
        .catch(err => {
          console.log(err.response);
          const response = err.response
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
      :
      axiosCLient.post(`/editScaleToBasket/${basketScaleInfo.id}`, payload)
        .then(({ data }) => {
          if (data) {
            console.log(data);
            setBasketScaleInfo(data.basket[0])
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
  console.log(basketScaleInfo);
  useEffect(() => {
    if (Object.keys(user).length != 0) {
      loadInfoScaleInBasket()
    }
  }, [user])
  useEffect(() => {
    if (Object.keys(basketScaleInfo || {}).length != 0) {
      setCount(basketScaleInfo.count)
      setVisiblePlusMinusButton(true)
    }
  }, [basketScaleInfo])
  return (
    <div className={classes.ScaleMain}>
      <div className={classes.scaleProductContent}>
        <div className={classes.scalseImage}>
          <img src={dataScale && dataScale.image} alt="scale image" />
        </div>
        <div className={classes.scaleTitleContainer}>
          <p className={classes.scaleTitile} onClick={() => navigate(`/scale/${dataScale && dataScale.id}`)}>{dataScale && dataScale.title}</p>
        </div>
        <div className={classes.sclaePriceContainer}>
          <p className={classes.scalePrice}>{dataScale && dataScale.price} Br</p>
        </div>
        <div className={classes.scaleButtonContainer}>
          <button className={classes.minusButton} style={{ display: visivlePulsMinusButton ? "block" : " none" }}
            onClick={() => {
              setCount(count - 1)
              if (count <= 1) {
                setVisiblePlusMinusButton(false)
                setCount(1)
                addedEditScaleToDB()
              }
            }}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className={classes.scaleButton} onClick={
            () => {
              if (visivlePulsMinusButton)
                return navigate('/basket')
              setVisiblePlusMinusButton(true)

              addedEditScaleToDB()
            }
          }>
            {
              visivlePulsMinusButton
                ?
                <div className={classes.activeBasketButton}>
                  <p>В корзине {count} шт.</p>
                  <p>Перейти в корзину</p>
                </div>
                :
                <>
                  <p>В корзину</p>
                  <FontAwesomeIcon icon={faCartShopping} />
                </>
            }
          </button>
          <button className={classes.plusButton} style={{ display: visivlePulsMinusButton ? "block" : " none" }}
            onClick={() => {
              setCount(count + 1)
              addedEditScaleToDB()
            }
            }>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Scales