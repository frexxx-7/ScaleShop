import React, { useRef } from 'react'
import classes from '../AddConstructor.module.scss'
import { useNavigate } from 'react-router-dom'
import axiosCLient from '../../../../axios.client'

const AddIndicator = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const navigate = useNavigate()

  const addIndicatorToDatabase = () => {
    const payload = {
      name: nameRef.current.value,
      price: priceRef.current.value
    }
    axiosCLient.post('/addIndicator', payload)
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


  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        <div className={classes.header}>
          <h1>
            Добавить индикатор
          </h1>
        </div>

        <div className={classes.inputs}>
          <input ref={nameRef} type="text" className={classes.dataInput} name="Name" placeholder='Название' />
          <input ref={priceRef} type="text" className={classes.dataInput} name="Price" placeholder='Цена' />
        </div>
        <div className={classes.addButtonDIv}>

          <button onClick={() => addIndicatorToDatabase()}>Добавить</button>

        </div>
      </div>
    </div>
  )
}

export default AddIndicator