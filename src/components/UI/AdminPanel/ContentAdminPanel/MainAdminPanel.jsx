import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ContentAdminPanel.module.scss'
import { faPen, faList, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const MainAdminPanel = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.AdminPanel}>
            
        </div>
    )
}

export default MainAdminPanel