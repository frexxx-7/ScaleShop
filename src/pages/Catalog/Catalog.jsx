import React, { useEffect, useState } from 'react'
import axiosCLient from '../../axios.client'
import CategoryScales from '../../components/CategoryScales/CategoryScales'
import classes from './Catalog.module.scss'

const Catalog = () => {
  const [infoCategoryScale, setInfoCategoryScale] = useState()


  const loadInfoCategoryFromDB = () => {
    axiosCLient.get(`/categoryScaleInfo`)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          setInfoCategoryScale(data.categorys_scale)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  useEffect(() => {
    loadInfoCategoryFromDB()
  }, [])

  return (
    <div className={classes.catalog}>
      <div className={classes.catalogContainer}>
        {
          infoCategoryScale &&
          Object.keys(infoCategoryScale).map(key =>
            <CategoryScales infoCategoryScales={infoCategoryScale[key]} key={key} />
          )
        }
      </div>

    </div>
  )
}

export default Catalog