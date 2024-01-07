import React from 'react'
import classes from './Reviews.module.scss'

const Reviews = ({dataReviews}) => {
  console.log(dataReviews);
  return (
    <div className={classes.reviewsContainer}>
      <div className={classes.reviewsDiv}>
        <div className={classes.titleName}>
          <p className={classes.nameUser}>{dataReviews && dataReviews.userName}</p>
        </div>

        <div className={classes.contentReviews}>
          <p className={classes.content}>{dataReviews && dataReviews.comment}</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews