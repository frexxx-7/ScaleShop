import React, { useRef } from 'react'
import classes from '../AddConstructor.module.scss'
import axiosCLient from '../../../../axios.client'
import { useNavigate } from 'react-router-dom'

const AddPlatform = () => {
  const sizeRef = useRef()
  const priceRef = useRef()
  const navigate = useNavigate()

  const addPlatformToDatabase = () => {
    const payload = {
      size: sizeRef.current.value,
      price: priceRef.current.value
    }
    axiosCLient.post('/addPlatform', payload)
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
            Добавить платформу
          </h1>
        </div>

        <div className={classes.inputs}>
          <input ref={sizeRef} type="text" className={classes.dataInput} name="Size" placeholder='Размер' />
          <input ref={priceRef} type="text" className={classes.dataInput} name="Price" placeholder='Цена' />
        </div>
        <div className={classes.addButtonDIv}>

          <button onClick={() => addPlatformToDatabase()}>Добавить</button>

        </div>
      </div>
    </div>
  )
}

export default AddPlatform