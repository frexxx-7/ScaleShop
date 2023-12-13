import React, { useRef, useState } from 'react'
import classes from './SignIn.module.scss'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'
import axiosCLient from '../../axios.client'

const SignIn = () => {
  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const [errors, setErrors] = useState()
  const { setUser, setToken } = useStateContext()

  const signInCLick = () => {
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    axiosCLient.post('/signin', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch(err => {
        const response = err.response
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }


  return (
    <div className={classes.SignIn}>
      <div className={classes.signInContainer}>
        <div className={classes.title}>
          <p>Вход</p>
        </div>
        <div className={classes.inputs}>
          <div className={classes.inputContainer}>
            <label htmlFor='email'>Почта<span className={classes.star}>*</span></label>
            <input type="text" ref={emailRef} name='email' className={classes.signInInput} />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor='password'>Пароль <span className={classes.star}>*</span></label>
            <input type="password" ref={passwordRef} name='password' className={classes.signInInput} />
          </div>
        </div>
        {errors &&
          <div>
            {Object.keys(errors).map(key => (
              <p className={classes.error} style={{color:"red",fontWeight:"bold"}} key={key}>{errors[key][0]}</p>
            ))}</div>
        }
        <div className={classes.signInButtonContainer}>
          <button className={classes.signInButton} onClick={signInCLick}>Войти</button>
          <p onClick={() => navigate('/signUp')}>Зарегистрироваться</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn