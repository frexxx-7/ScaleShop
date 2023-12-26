import React, { useRef } from 'react'
import classes from './AddCategoryScale.module.scss'
import { useNavigate } from 'react-router-dom'
import axiosCLient from '../../../axios.client'

const AddCategoryScale = () => {
  const nameRef = useRef()

  const navigate = useNavigate()

  const addCategoryScaleToDatabase = () => {
    const payload = {
      name: nameRef.current.value,
    }
    axiosCLient.post('/addCategoryScale', payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          navigate(`/addScale`)
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
    <div className={classes.addCategoryScale}>
      <div className={classes.addCategoryScaleWindow}>
        <div className={classes.addCategoryScaleContent}>

          <div className={classes.header}>
            <h1>
              Добавить категорию весов
            </h1>
          </div>

          <div className={classes.inputs}>
            <input ref={nameRef} type="text" className={classes.dataInput} name="Name" placeholder='Название' />
          </div>
        </div>
        <div className={classes.addButtonDIv}>
          <button onClick={addCategoryScaleToDatabase}>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default AddCategoryScale