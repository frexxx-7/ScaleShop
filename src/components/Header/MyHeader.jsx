import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './MyHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useStateContext } from '../../context/ContextProvider'
import Catalog from '../../pages/Catalog/Catalog'
import ModalWindow from '../UI/ModalWindow/ModalWindow'

const MyHeader = () => {
  const { user } = useStateContext()
  const navigate = useNavigate()
  const [visibleModal, setVisibleModal] = useState(false)
  const searchRef = useRef()

  return (
    <div className={classes.Header}>

      <div className={classes.topHeader}>
        <div className={classes.topHeaderContainer}>
          <ul className={classes.headerMenuUl}>
            <li onClick={()=>navigate('/catalog')}>Каталог</li>
            <li>О компании</li>
            <li>Контакты</li>
            <li>Доставка</li>
            <li>Оплата</li>
            <li onClick={()=>navigate('/profile')}>Профиль</li>
          </ul>
        </div>
      </div>


      <div className={classes.bottomHeader}>
        <div className={classes.bottomHeaderContainer}>
          <div className={classes.nameSite}>
            <p onClick={() => navigate('/main')}>ScaleShop</p>
          </div>
          <div className={classes.containerHeaderButton}>
            <button className={classes.headerButton} onClick={()=>setVisibleModal(true)}>
              <FontAwesomeIcon icon={faBars} />
              Каталог</button>
          </div>
          <ModalWindow visible={visibleModal} setVisible={setVisibleModal} children={<Catalog/>} />
          <div className={classes.containerSearchInput}>
            <input type="text" className={classes.searchInput} placeholder='Поиск' ref={searchRef} />
            <button className={classes.searchButton} onClick={()=>navigate(`/search/${searchRef.current.value}`)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>

          <div className={classes.containerIcon}>
            <FontAwesomeIcon icon={faUser} onClick={() => Object.keys(user).length != 0 ? navigate('/profile') : navigate('/signin')} />
            <div className={classes.cartShopping}>
              <FontAwesomeIcon icon={faCartShopping} />
              <p className={classes.priceBasket}>0 Br</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyHeader