import React from 'react'
import classes from './Main.module.scss'
import { Carousel } from 'react-carousel-minimal';
import Scales from '../../components/Scales/Scales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';

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
      <div className={classes.mainContent}>
        <div className={classes.sliderContainer}>
          <div style={{ textAlign: "center" }}>
            <div>
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
          <div className={classes.headNewScales}>
            <p className={classes.headNewScalesP}>Новое поступление</p>
          </div>
          <div className={classes.contentNewScales}>
            <Scales />
            <Scales />
            <Scales />
            <Scales />
            <Scales />
          </div>
        </div>

        <div className={classes.howChoiceScale}>
          <div className={classes.howChoiceScaleContainer}>
            <h2>Как выбрать весы?</h2>
            <p>Выбор правильных весов может быть сложной задачей, учитывая разнообразие моделей и функций, предлагаемых на рынке. Однако, с учетом нескольких ключевых факторов, можно сделать более осознанный выбор, который будет соответствовать вашим потребностям. В этой статье мы рассмотрим несколько важных аспектов, которые следует учитывать при выборе весов.</p>
            <button className={classes.howChoiceButton}>Узнать подробнее</button>
          </div>
        </div>

        <div className={classes.newScales}>
          <div className={classes.headNewScales}>
            <p className={classes.headNewScalesP}>Настольные весы</p>
          </div>
          <div className={classes.contentNewScales}>
            <Scales />
            <Scales />
            <Scales />
            <Scales />
            <Scales />
          </div>
        </div>
        <div className={classes.newScales}>
          <div className={classes.headNewScales}>
            <p className={classes.headNewScalesP}>Напольные весы</p>
          </div>
          <div className={classes.contentNewScales}>
            <Scales />
            <Scales />
            <Scales />
            <Scales />
            <Scales />
          </div>
        </div>

        <div className={classes.ourAdvantages}>
          <div className={classes.headNewScales}>
            <p className={classes.headNewScalesP}>Наши плюсы</p>
          </div>

          <div className={classes.ourAdvantagesContainer}>

            <div className={classes.ourAdnvantagesCard}>
              <div className={classes.ourAdvantagesIcon}>
                <FontAwesomeIcon icon={faClipboard} />
              </div>
              <div className={classes.ourAdvantagesTitle}>
                <p>Широкий ассортимент</p>
              </div>
              <div className={classes.ourAdvantagesDescription}>
                <p>Мы закупаем фрукты и овощи по всему миру – от Эквадора до Китая. Более 100 видов электронных весов и фруктов представлены на наших прилавках.</p>
              </div>
            </div>

            <div className={classes.ourAdnvantagesCard}>
              <div className={classes.ourAdvantagesIcon}>
                <FontAwesomeIcon icon={faClipboard} />
              </div>
              <div className={classes.ourAdvantagesTitle}>
                <p>Широкий ассортимент</p>
              </div>
              <div className={classes.ourAdvantagesDescription}>
                <p>Мы закупаем фрукты и овощи по всему миру – от Эквадора до Китая. Более 400 сортов овощей и фруктов представлены на наших прилавках.</p>
              </div>
            </div>
            <div className={classes.ourAdnvantagesCard}>
              <div className={classes.ourAdvantagesIcon}>
                <FontAwesomeIcon icon={faClipboard} />
              </div>
              <div className={classes.ourAdvantagesTitle}>
                <p>Широкий ассортимент</p>
              </div>
              <div className={classes.ourAdvantagesDescription}>
                <p>Мы закупаем фрукты и овощи по всему миру – от Эквадора до Китая. Более 100 видов весов представлены на наших прилавках.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main