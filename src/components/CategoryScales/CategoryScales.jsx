import React from 'react'
import classes from './CategoryScale.module.scss'
import { useNavigate } from 'react-router-dom'

const CategoryScales = ({ infoCategoryScales }) => {
  const navigate = useNavigate()
  return (
    <div className={classes.categoryScale} onClick={()=>navigate(`/categoryScale/${infoCategoryScales.id}`)}>
      <div className={classes.image}>
        <img src={infoCategoryScales && infoCategoryScales.image} alt="image category" />
      </div>
      <div className={classes.title}>
        <p className={classes.titleCategoryScale}>{infoCategoryScales && infoCategoryScales.name}</p>
      </div>
    </div>
  )
}

export default CategoryScales