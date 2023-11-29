import React, { useRef } from 'react'
import classes from './SignUp.module.scss'
import { useNavigate } from 'react-router-dom'
import axiosCLient from '../../axios.client'
import { useStateContext } from '../../context/ContextProvider'
import { useState } from 'react'

const SignUp = () => {
  const navigate = useNavigate()

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [errors, setErrors] = useState(null);

  const { setUser, setToken } = useStateContext()

  const signUpClick = (e) => {
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: repeatPasswordRef.current.value
    }
    axiosCLient.post('/signup', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
        navigate('/main')
      })
      .catch(err => {
        const response = err.response
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div className={classes.SignUp}>
      <div className={classes.signUpContainer}>
        <div className={classes.title}>
          <p>Регистрация</p>
        </div>
        <div className={classes.inputs}>
          <div className={classes.inputContainer}>
            <label htmlFor='name'>Имя<span className={classes.star}>*</span></label>
            <input type="text" name='name' ref={nameRef} className={classes.signUpInput} />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor='email'>Почта<span className={classes.star}>*</span></label>
            <input type="text" name='email' ref={emailRef} className={classes.signUpInput} />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor='password'>Пароль <span className={classes.star}>*</span></label>
            <input type="text" name='password' ref={passwordRef} className={classes.signUpInput} />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor='repeatPassword'>Повторите пароль <span className={classes.star}>*</span></label>
            <input type="text" name='repeatPassword' ref={repeatPasswordRef} className={classes.signUpInput} />
          </div>
        </div>
        {errors &&
          <div>
            {Object.keys(errors).map(key => (
              <p className={classes.error} style={{color:"red",fontWeight:"bold"}} key={key}>{errors[key][0]}</p>
            ))}</div>
        }
        <div className={classes.signUpButtonContainer}>
          <button className={classes.signUpButton} onClick={signUpClick}>Зарегистрироваться</button>
          <p onClick={() => navigate('/signIn')}>У меня уже есть аккаунт</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp