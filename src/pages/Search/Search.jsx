import React, { useEffect, useRef, useState } from 'react'
import classes from './Search.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import axiosCLient from '../../axios.client'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Scales from '../../components/Scales/Scales'

const Search = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const [infoScales, setInfoScales] = useState()
  const [searchText, setSearchText] = useState(location.pathname.split('/')[location.pathname.split('/').length - 1])


  const loadInfoSearchScale = () => {
    axiosCLient.get(`/searchScale/${searchText}`)
      .then(({ data }) => {
        if (data) {
          setInfoScales(data.scale);
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }

  useEffect(() => {
    loadInfoSearchScale()
    searchRef.current.value = searchText
  }, [searchText])

  return (
    <div className={classes.Search}>
      <div className={classes.SearchContainer}>
        <div className={classes.title}>
          <p>Поиск</p>
        </div>
        <div className={classes.searchInputDiv}>
          <input type="text" className={classes.searchInput} placeholder='Поиск' ref={searchRef} onChange={(e) => setSearchText(e.target.value)} />
          <button className={classes.searchButton} onClick={() => navigate(`/search/${searchRef.current.value}`)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>

        <div className={classes.scaleContainer}>
          {
            infoScales &&
            Object.keys(infoScales).map(key =>
              <Scales dataScale={infoScales[key]} key={key} />
            )
          }
          {
            infoScales &&
            Object.keys(infoScales).length == 0 &&
            <p style={{fontSize: "20px", fontWeight: "bold"}}>Ничего не найдено</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Search