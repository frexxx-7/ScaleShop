import React, { useEffect, useRef, useState } from 'react'
import classes from './AddScale.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosCLient from '../../../axios.client'
import ModalWindow from '../../../components/UI/ModalWindow/ModalWindow'
import Catalog from '../../Catalog/Catalog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddScale = () => {

  const [selectedImage, setSelectedImage] = useState()
  const [visibleModal, setVisibleModal] = useState(false)
  const [errors, setErrors] = useState([])
  const [infoCategoryScale, setInfoCategoryScale] = useState([])
  const [infoScale, setInfoScale] = useState()

  const titleRef = useRef()
  const contentRef = useRef()
  const priceRef = useRef()
  const countRef = useRef()
  const categoryRef = useRef()

  const navigate = useNavigate()
  const location = useLocation()

  const idScale = location.pathname.split('/')[location.pathname.split('/').length - 1];



  const loadInfoScale = () => {
    if (location.pathname.split('/')[1] == "editScale") {
      axiosCLient.get(`/scale/${location.pathname.split('/')[2]}`)
        .then(({ data }) => {
          if (data) {
            setInfoScale(data.scale);
          }
        })
        .catch(({ response }) => {
          console.log(response);
        })
    }
  }

  useEffect(() => {
    loadInfoCategoryFromDB()
    loadInfoScale();
  }, [])

  useEffect(() => {
    console.log(infoScale);
    if (infoScale) {
      titleRef.current.value = infoScale.title
      countRef.current.value = infoScale.count
      priceRef.current.value = infoScale.price
      contentRef.current.value = infoScale.content
      setSelectedImage(infoScale.image)
      categoryRef.current.value = infoScale.idCategoryScale
    }
  }, [infoScale])

  const chooseImage = async (files) => {
    const selectImg = document.getElementById("selectImg");
    const file = files[0]
    if (!file.type.startsWith('image/')) { return '' }
    selectImg.file = file
    var reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
        setSelectedImage(e.target.result)
      };
    })(selectImg);
    reader.readAsDataURL(file);
  }

  const changeImage = (e) => {
    const fileElem = document.getElementById("fileElem");
    if (fileElem) {
      fileElem.click();
    }
  }
  const loadInfoCategoryFromDB = () => {
    axiosCLient.get(`/categoryScaleInfo`)
      .then(({ data }) => {
        if (data) {
          setInfoCategoryScale(data.categorys_scale)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  const editScaleToDatabase = () => {
    const payload = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      image: selectedImage,
      price: priceRef.current.value,
      count: countRef.current.value,
      idCategoryScale: categoryRef.current.value
    }
    axiosCLient.post(`/editScale/ ${idScale}`, payload)
      .then(({ data }) => {
        if (data) {
          if (data.scale == 1)
            navigate(`/scale/${idScale}`)
        }
      })
      .catch(err => {
        const response = err.response
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }
  const addScaleToDatabase = () => {
    const payload = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      image: selectedImage,
      price: priceRef.current.value,
      count: countRef.current.value,
      idCategoryScale: categoryRef.current.value
    }
    axiosCLient.post('/addScale', payload)
      .then(({ data }) => {
        if (data) {
          console.log(data);
          navigate(`/scale/${data.scale.id}`)
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
    <div className={classes.addScale}>
      <div className={classes.addScaleWindow}>
        <div className={classes.addScaleContent}>

          <div className={classes.header}>
            <h1>
              {
                location.pathname.split('/')[1] == "addScale"
                  ?
                  "Добавить весы"
                  :
                  "Редактировать весы"
              }
            </h1>
          </div>

          <div className={classes.inputs}>
            <input ref={titleRef} type="text" className={classes.dataInput} name="Title" placeholder='Заголовок' />
            <input ref={countRef} type="text" className={classes.dataInput} name="Count" placeholder='Количество' />
            <input ref={priceRef} type="text" className={classes.dataInput} name="Price" placeholder='Цена' />
            <textarea ref={contentRef} type="textarea" className={classes.dataInput} name="Content" placeholder='Контент' />
          </div>

          <ModalWindow visible={visibleModal} setVisible={setVisibleModal} children={<Catalog />} />

          <div className={classes.addPhoto}>
            <p>Добавьте фото:</p>
            <div className={classes.icon} onClick={changeImage}><FontAwesomeIcon icon={faPlus} /></div>
            <input
              type="file"
              name="file"
              id="fileElem"
              style={{ display: "none" }}
              onChange={(e) => chooseImage(e.target.files)}
            />
            <img src={selectedImage}
              alt="Selected image"
              style={{ display: selectedImage ? "block" : "none" }}
              id="selectImg"
              className={classes.selectImg}
              onClick={(e) => setVisibleModal(true)} />
          </div>
          <div className={classes.comboBoxCategoryDiv}>
            <p>Категория весов:</p>
            <select name="categoryScale" className={classes.comboBoxCategory} ref={categoryRef}>
              {
                Object.keys(infoCategoryScale).map(key =>
                  <option value={infoCategoryScale[key].id} key={key}>{infoCategoryScale[key].name}</option>
                )
              }
            </select>
          </div>
          {errors &&
            <div>
              {Object.keys(errors).map(key =>
                <p className={classes.error} key={key}>{errors[key][0]}</p>
              )}</div>
          }
        </div>
        <div className={classes.addButtonDIv}>
          {
            location.pathname.split('/')[1] == "addScale"
              ?
              <button onClick={addScaleToDatabase}>Добавить</button>
              :
              <button onClick={editScaleToDatabase}>Редактировать</button>
          }
        </div>
      </div>
    </div>
  )
}

export default AddScale