import React, { useEffect, useState } from 'react'
import axiosCLient from '../../axios.client'
import { useLocation } from 'react-router-dom';
import classes from './Category.module.scss'
import Scales from '../../components/Scales/Scales';

const Category = () => {
  const [infoScales, setInfoScales] = useState()

  const location = useLocation()
  const idCategory = location.pathname.split('/')[location.pathname.split('/').length - 1];

  const loadAllScaleInCategory = () => {
    axiosCLient.get(`/allScaleInCategory/${idCategory}`)
      .then(({ data }) => {
        if (data) {
          console.log(data.scales);
          setInfoScales(data.scales)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  useEffect(() => {
    loadAllScaleInCategory()
  }, [])
  return (
    <div className={classes.Category}>
      <div className={classes.categoryContainer}>
        {
          infoScales &&
          Object.keys(infoScales).map(key =>
            <Scales dataScale={infoScales[key]} key={key} />
          )
        }
      </div>
    </div>
  )
}

export default Category