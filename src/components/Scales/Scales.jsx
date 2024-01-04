import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Scales.module.scss'
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Scales = ({ dataScale }) => {

  const [visivlePulsMinusButton, setVisiblePlusMinusButton] = useState(false)
  const [count, setCount] = useState(1)

  const navigate = useNavigate()
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
              }
            }}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className={classes.scaleButton} onClick={
            () => {
              if(visivlePulsMinusButton)
                navigate('/basket')
              setVisiblePlusMinusButton(true)
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
          <button className={classes.plusButton} style={{ display: visivlePulsMinusButton ? "block" : " none" }} onClick={() => setCount(count + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Scales