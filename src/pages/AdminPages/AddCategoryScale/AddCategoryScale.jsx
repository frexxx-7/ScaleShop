import React, { useRef, useState } from 'react'
import classes from './AddCategoryScale.module.scss'
import { useNavigate } from 'react-router-dom'
import axiosCLient from '../../../axios.client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalWindow from '../../../components/UI/ModalWindow/ModalWindow'
import Catalog from '../../Catalog/Catalog'

const AddCategoryScale = () => {
  const [selectedImage, setSelectedImage] = useState()
  const [visibleModal, setVisibleModal] = useState(false)

  const navigate = useNavigate()

  const nameRef = useRef()

  const changeImage = (e) => {
    const fileElem = document.getElementById("fileElem");
    if (fileElem) {
      fileElem.click();
    }
  }

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

  const addCategoryScaleToDatabase = () => {
    const payload = {
      name: nameRef.current.value,
      image: selectedImage
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
        </div>
        <ModalWindow visible={visibleModal} setVisible={setVisibleModal} children={selectedImage} isImage={true} />
        <div className={classes.addButtonDIv}>
          <button onClick={addCategoryScaleToDatabase}>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default AddCategoryScale