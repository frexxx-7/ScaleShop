import React, { useEffect, useRef, useState } from 'react'
import classes from './Constructor.module.scss'
import axiosCLient from '../../axios.client'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/ContextProvider'

const Constructor = () => {
  const {user} = useStateContext()

  const platformRef = useRef()
  const nvpRef = useRef()
  const materialRef = useRef()
  const indicatorRef = useRef()
  const strainGaugeRef = useRef()
  const fasteningRef = useRef()

  const navigate = useNavigate()

  const [platformInfo, setPlatformInfo] = useState()
  const [fasteningInfo, setFasteningInfo] = useState()
  const [indicatorInfo, setIndicatorInfo] = useState()
  const [materialsInfo, setMaterialsInfo] = useState()
  const [npvInfo, setNPVInfo] = useState()
  const [strainGaugeInfo, setStrainGaugeInfo] = useState()

  const loadPlatformInfo = () => {
    axiosCLient.get(`/loadPlatformInfo`)
      .then(({ data }) => {
        if (data) {
          console.log(data.platforms);
          setPlatformInfo(data.platforms)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  const loadFasteningInfo = () => {
    axiosCLient.get(`/loadFasteningInfo`)
      .then(({ data }) => {
        if (data) {
          console.log(data.fastening);
          setFasteningInfo(data.fastening)
        }
      })
      .catch(({ response }) => {
        console.log(response);
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
  const loadMaterialInfo = () => {
    axiosCLient.get(`/loadMaterialInfo`)
      .then(({ data }) => {
        if (data) {
          console.log(data.materials);
          setMaterialsInfo(data.materials)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  const loadNPVInfo = () => {
    axiosCLient.get(`/loadNPVInfo`)
      .then(({ data }) => {
        if (data) {
          console.log(data.npv);
          setNPVInfo(data.npv)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  const loadStrainGauge = () => {
    axiosCLient.get(`/loadStrainGauge`)
      .then(({ data }) => {
        if (data) {
          console.log(data.strainGauge);
          setStrainGaugeInfo(data.strainGauge)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  useEffect(() => {
    loadPlatformInfo()
    loadFasteningInfo()
    loadIndicatorInfo()
    loadMaterialInfo()
    loadNPVInfo()
    loadStrainGauge()
  }, [])
  const saveConstructorScaleToDB = () => {
    const payload = {
      idPlatforms: platformRef.current.value,
      idNPV: nvpRef.current.value,
      idMaterial: materialRef.current.value,
      idIndicator: indicatorRef.current.value,
      idStrainGuages: strainGaugeRef.current.value,
      idFastening: fasteningRef.current.value,
      idUser: user.id
    }
    axiosCLient.post('/addConstructorScale', payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          navigate('/basket')
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
    <div className={classes.Constructor}>
      <div className={classes.constructorContainer}>
        <div className={classes.title}>
          <p>Конструктор</p>
        </div>
        <div className={classes.comboBoxs}>
          <div className={classes.comboBoxContainer}>
            <p>Выберите размер платформы:</p>
            <select name="platformScale" className={classes.comboBoxPlatform} ref={platformRef}>
              {
                platformInfo &&
                Object.keys(platformInfo).map(key =>
                  <option value={platformInfo[key].id} key={key}>{platformInfo[key].size}</option>
                )
              }
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите НПВ:</p>
            <select name="nvpScale" className={classes.comboBoxNVP} ref={nvpRef}>
              {
                npvInfo &&
                Object.keys(npvInfo).map(key =>
                  <option value={npvInfo[key].id} key={key}>{npvInfo[key].magnitude}</option>
                )
              }
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите материал:</p>
            <select name="materialScale" className={classes.comboBoxMaterial} ref={materialRef}>
              {
                materialsInfo &&
                Object.keys(materialsInfo).map(key =>
                  <option value={materialsInfo[key].id} key={key}>{materialsInfo[key].name}</option>
                )
              }
            </select>
          </div>
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
          <div className={classes.comboBoxContainer}>
            <p>Выберите тензодатчик:</p>
            <select name="strainGaugeScale" className={classes.comboBoxStarinGauge} ref={strainGaugeRef}>
              {
                strainGaugeInfo &&
                Object.keys(strainGaugeInfo).map(key =>
                  <option value={strainGaugeInfo[key].id} key={key}>{strainGaugeInfo[key].name}</option>
                )
              }
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите крепление:</p>
            <select name="fasteningScale" className={classes.comboBoxFastening} ref={fasteningRef}>
              {
                fasteningInfo &&
                Object.keys(fasteningInfo).map(key =>
                  <option value={fasteningInfo[key].id} key={key}>{fasteningInfo[key].name}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.saveButton} onClick={() => saveConstructorScaleToDB()}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}

export default Constructor