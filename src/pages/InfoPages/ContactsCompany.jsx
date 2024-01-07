import React from 'react'
import classes from './InfoPages.module.scss'

const ContactsCompany = () => {
  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        <div className={classes.title}>
          Контакты
        </div>
        <p>Вы можете найти нас по адресу: г. Молодечно, ул. Виленская, дом 1236</p>


        <p>Телефон отдела продаж: 9-99-99-99-99 (многоканальный)</p>

        <p>Телефон отдела оптовых продаж: 9-99-99-99-99</p>

        <p>Email: ScaleShop@myshop.ru</p>
        <br />
        <p style={{ fontWeight: "700" }}>График работы офиса и склада:</p>

        <p>Понедельник	с 9:00 до 21:00</p>
        <p>Вторник	с 9:00 до 21:00</p>
        <p>Среда	с 9:00 до 21:00</p>
        <p>Четверг	с 9:00 до 21:00</p>
        <p>Пятница	с 9:00 до 21:00</p>
        <p>Суббота	с 10:00 до 20:00</p>
        <p>Воскресенье	с 10:00 до 20:00</p>
        <p>Заказы через сайт принимаются круглосуточно!</p>
        <br />
        <p style={{ fontWeight: "700" }}>Реквизиты:</p>

        <p>ИП Иванов Иван Иванович</p>

        <p>ОГРНИП: 123456789012345</p>

        <p>ИНН: 123456789012</p>

        <p>КПП: 123456789</p>
      </div>
    </div>
  )
}

export default ContactsCompany