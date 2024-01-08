import React, { useRef } from 'react'
import classes from '../AddConstructor.module.scss'
import axiosCLient from '../../../../axios.client'
import { useNavigate } from 'react-router-dom'

const AddMaterial = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const navigate = useNavigate()

  const addMaterialToDatabase = () => {
    const payload = {
      name: nameRef.current.value,
      price: priceRef.current.value
    }
    axiosCLient.post('/addMaterial', payload)
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
            Добавить материал
          </h1>
        </div>

        <div className={classes.inputs}>
          <input ref={nameRef} type="text" className={classes.dataInput} name="Name" placeholder='Название' />
          <input ref={priceRef} type="text" className={classes.dataInput} name="Price" placeholder='Цена' />
        </div>
        <div className={classes.addButtonDIv}>

          <button onClick={() => addMaterialToDatabase()}>Добавить</button>

        </div>
      </div>
    </div>
  )
}

export default AddMaterial