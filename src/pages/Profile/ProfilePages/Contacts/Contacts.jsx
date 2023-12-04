import React, { useState } from 'react'
import classes from './Contacts.module.scss'
import { useRef } from 'react'
import { useStateContext } from '../../../../context/ContextProvider'

const Contacts = () => {
  const { user, setUser } = useStateContext()

  const [resetPasswordChecked, setResetPasswordChecked] = useState(false)

  const nameRef = useRef()
  const emailRef = useRef()

  const oldPasswordRef = useRef()
  const newPasswordRef = useRef()
  const repeatNewPasswordRef = useRef()

  const resetPasswordCheckBoxRef = useRef()

  user.name ? nameRef.current.value = user.name : ""
  user.email ? emailRef.current.value = user.email : ""

  return (
    <div className={classes.Contacts}>
     <div className={classes.titile}>
        <h1>Контакты</h1>
      </div>
      <div className={classes.inputs}>
        <div className={classes.inputContainer}>
          <label htmlFor='name'>Контактное лицо (ФИО) <span className={classes.star}>*</span></label>
          <input type="text" ref={nameRef} name='name' className={classes.contactsInput} />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor='email'>Email <span className={classes.star}>*</span></label>
          <input type="text" ref={emailRef} name='email' className={classes.contactsInput} />
        </div>
        <div className={classes.checkBoxContainer}>
          <input type="checkbox" className={classes.contactsCheckBox} ref={resetPasswordCheckBoxRef} onClick={(e) => setResetPasswordChecked(e.target.checked)} />
          <p>Сменить пароль</p>
        </div>
      </div>
      {
        resetPasswordChecked
          ?
          <div className={classes.resetPasswordContainer}>
            <div className={classes.inputContainer}>
              <label htmlFor='oldpassword'>Старый пароль <span className={classes.star}>*</span></label>
              <input type="password" ref={oldPasswordRef} name='oldpassword' className={classes.contactsInput} />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor='newpassword'>Новый пароль <span className={classes.star}>*</span></label>
              <input type="password" ref={newPasswordRef} name='newpassword' className={classes.contactsInput} />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor='repeatpassword'>Повторите пароль <span className={classes.star}>*</span></label>
              <input type="password" ref={repeatNewPasswordRef} name='repeatpassword' className={classes.contactsInput} />
            </div>
          </div>
          :
          ""
      }

      <div className={classes.saveButtonContainer}>
        <button className={classes.saveButton}>Сохранить изменения</button>
      </div>

    </div>
  )
}

export default Contacts