import React from 'react'
import classes from './SignIn.module.scss'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.SignIn}>
      <div className={classes.signInContainer}>
        <div className={classes.title}>
          <p>Вход</p>
        </div>
        <div className={classes.inputs}>
          <div className={classes.inputContainer}>
            <label for='email'>Почта<span className={classes.star}>*</span></label>
            <input type="text" name='email' className={classes.signInInput} />
          </div>
          <div className={classes.inputContainer}>
            <label for='password'>Пароль <span className={classes.star}>*</span></label>
            <input type="text" name='password' className={classes.signInInput} />
          </div>
        </div>
        <div className={classes.signInButtonContainer}>
          <button className={classes.signInButton}>Войти</button>
          <p onClick={()=>navigate('/signUp')}>Зарегистрироваться</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn