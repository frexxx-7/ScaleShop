import React, { useEffect, useRef, useState } from 'react'
import classes from '../AddConstructor.module.scss'
import { useNavigate } from 'react-router-dom'
import axiosCLient from '../../../../axios.client'

const AddFastening = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const indicatorRef = useRef()

  const [indicatorInfo, setIndicatorInfo] = useState()

  const navigate = useNavigate()

  const addFasteningToDatabase = () => {
    const payload = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      idIndicator: indicatorRef.current.value
    }
    axiosCLient.post('/addFastening', payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          navigate(`/constructor`)
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

  const loadIndicatorInfo = () => {
    axiosCLient.get(`/loadIndicatorInfo`)
      .then(({ data }) => {
        if (data) {
          console.log(data.indicators);
          setIndicatorInfo(data.indicators)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  useEffect(()=>{
    loadIndicatorInfo()
  }, [])

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        <div className={classes.header}>
          <h1>
            Добавить крепление
          </h1>
        </div>

        <div className={classes.inputs}>
          <input ref={nameRef} type="text" className={classes.dataInput} name="Size" placeholder='Размер' />
          <input ref={priceRef} type="text" className={classes.dataInput} name="Price" placeholder='Цена' />
          <div className={classes.comboBoxContainer}>
            <p>Выберите индикатор:</p>
            <select name="indicatorScale" className={classes.comboBoxIndicator} ref={indicatorRef}>
              {
                indicatorInfo &&
                Object.keys(indicatorInfo).map(key =>
                  <option value={indicatorInfo[key].id} key={key}>{indicatorInfo[key].name}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className={classes.addButtonDIv}>

          <button onClick={() => addFasteningToDatabase()}>Добавить</button>

        </div>
      </div>
    </div>
  )
}

export default AddFastening