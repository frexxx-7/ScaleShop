import React, { useEffect, useState } from 'react'
import OneScale from '../../pages/OneScale/OneScale';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosCLient from '../../axios.client';

const LoadScale = () => {
  const currentUrl = useLocation()
  const [infoScale, setInfoScale] = useState()
  const idScale = currentUrl.pathname.split('/')[currentUrl.pathname.split('/').length - 1];

  const navigate = useNavigate()

  const loadScaleInfo = () => {
    axiosCLient.get(`/scale/${idScale}`)
      .then(({ data }) => {
        console.log(data);
        setInfoScale({...data.scale, categoryName: data.categoryName})
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  useEffect(() => {
    loadScaleInfo()
  }, [])

  return (
     <div>
      <OneScale scaleInfo={infoScale} />
    </div>
  )
}

export default LoadScale