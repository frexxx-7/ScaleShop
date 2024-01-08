import React, { useRef } from 'react'
import classes from './Constructor.module.scss'

const Constructor = () => {
  const platformRef = useRef()
  const nvpRef = useRef()
  const materialRef = useRef()
  const indicatorRef = useRef()
  const strainGaugeRef = useRef()
  const fasteningRef = useRef()

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
              {/*{
                Object.keys(infoCategoryScale).map(key =>
                  <option value={infoCategoryScale[key].id} key={key}>{infoCategoryScale[key].name}</option>
                )
              }*/}
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите НПВ:</p>
            <select name="nvpScale" className={classes.comboBoxNVP} ref={nvpRef}>
              {/*{
                Object.keys(infoCategoryScale).map(key =>
                  <option value={infoCategoryScale[key].id} key={key}>{infoCategoryScale[key].name}</option>
                )
              }*/}
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите материал:</p>
            <select name="materialScale" className={classes.comboBoxMaterial} ref={materialRef}>
              {/*{
                Object.keys(infoCategoryScale).map(key =>
                  <option value={infoCategoryScale[key].id} key={key}>{infoCategoryScale[key].name}</option>
                )
              }*/}
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите индикатор:</p>
            <select name="indicatorScale" className={classes.comboBoxIndicator} ref={indicatorRef}>
              {/*{
                Object.keys(infoCategoryScale).map(key =>
                  <option value={infoCategoryScale[key].id} key={key}>{infoCategoryScale[key].name}</option>
                )
              }*/}
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите тензодатчик:</p>
            <select name="strainGaugeScale" className={classes.comboBoxStarinGauge} ref={strainGaugeRef}>
              {/*{
                Object.keys(infoCategoryScale).map(key =>
                  <option value={infoCategoryScale[key].id} key={key}>{infoCategoryScale[key].name}</option>
                )
              }*/}
            </select>
          </div>
          <div className={classes.comboBoxContainer}>
            <p>Выберите крепление:</p>
            <select name="fasteningScale" className={classes.comboBoxFastening} ref={fasteningRef}>
              {/*{
                Object.keys(infoCategoryScale).map(key =>
                  <option value={infoCategoryScale[key].id} key={key}>{infoCategoryScale[key].name}</option>
                )
              }*/}
            </select>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.saveButton}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}

export default Constructor