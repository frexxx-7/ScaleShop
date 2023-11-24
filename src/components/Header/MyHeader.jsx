import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './MyHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const MyHeader = () => {
  const navigate = useNavigate()


  return (
    <div className={classes.Header}>

      <div className={classes.topHeader}>
        <div className={classes.topHeaderContainer}>
          <ul className={classes.headerMenuUl}>
            <li>Каталог</li>
            <li>О компании</li>
            <li>Контакты</li>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>Профиль</li>
          </ul>
        </div>
      </div>


      <div className={classes.bottomHeader}>
        <div className={classes.bottomHeaderContainer}>
          <div className={classes.nameSite}>
            <p>ScaleShop</p>
          </div>
          <div className={classes.containerHeaderButton}>
            <button className={classes.headerButton}>
              <FontAwesomeIcon icon={faBars}/>
              Каталог</button>
          </div>

          <div className={classes.containerSearchInput}>
            <input type="text" className={classes.searchInput}/>
            <button className={classes.searchButton}><FontAwesomeIcon icon = {faMagnifyingGlass}/></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyHeader