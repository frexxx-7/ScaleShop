import React from 'react'
import classes from './Reviews.module.scss'

const Reviews = () => {
  return (
    <div className={classes.reviewsContainer}>
      <div className={classes.reviewsDiv}>
        <div className={classes.titleName}>
          <p className={classes.nameUser}>Name user</p>
        </div>

        <div className={classes.contentReviews}>
          <p className={classes.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facere sunt repellendus, repellat exercitationem ducimus ut recusandae iste optio a voluptate tempora adipisci blanditiis tenetur nulla et porro amet nesciunt!</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews