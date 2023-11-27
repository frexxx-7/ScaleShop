import React from 'react'
import classes from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTelegram, faVk, faYoutube } from '@fortawesome/fontawesome-free-brands'

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerLeftBlock}>
          <div className={classes.linkBlock}>
            <div className={classes.footerOneBlock}>
              <p className={classes.titleOneBlock}>О магазине</p>
              <p>Информация о магазине</p>
            </div>
  
            <div className={classes.footerOneBlock}>
              <p className={classes.titleOneBlock}>Покупателям</p>
              <p>Личный кабинет</p>
              <p>Мои заказы</p>
            </div>
          </div>

          <div className={classes.nameSite}>
            <p>ScaleShop</p>
          </div>
        </div>

        <div className={classes.footerRightBlock}>
          <div className={classes.socialNetworks}>
            <p>Мы в соц. сетях</p>
            <div className={classes.socialNetworksLinks}>
              <FontAwesomeIcon icon={faTelegram}/>
              <FontAwesomeIcon icon={faVk}/>
              <FontAwesomeIcon icon={faInstagram}/>
              <FontAwesomeIcon icon={faYoutube}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer