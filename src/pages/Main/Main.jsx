import React from 'react'
import classes from './Main.module.scss'
import { Carousel } from 'react-carousel-minimal';

const Main = () => {
  const data = [
    {
      image: "./slider-1.jpeg",
      caption: "Премиум весы высокого качества"
    },
    {
      image: "./slider-2.jpg",
      caption: "Лучшие цены"
    },
  ];

  const captionStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className={classes.main}>
      <div className={classes.sliderContainer}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={2000}
              width="1380px"
              height="500px"
              captionStyle={captionStyle}
              slideNumberStyle={slideNumberStyle}
              captionPosition="center"
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "1380px",
                maxHeight: "500px",
                margin: "20px auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className={classes.newScales}>
              
      </div>
    </div>
  )
}

export default Main