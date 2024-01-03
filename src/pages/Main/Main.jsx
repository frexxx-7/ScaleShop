import React, { useEffect, useState } from 'react'
import classes from './Main.module.scss'
import { Carousel } from 'react-carousel-minimal';
import Scales from '../../components/Scales/Scales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import Reviews from '../../components/Reviews/Reviews';
import { useNavigate } from 'react-router-dom';
import axiosCLient from '../../axios.client';

const Main = () => {
  const [dataLastScale, setDataLastScale] = useState()
  const [infoCategoryAndScale, setInfoCategoryAndScale] = useState()

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

  const loadLast = () => {
    axiosCLient.get(`/loadLastScale`)
      .then(({ data }) => {
        if (data) {
          setDataLastScale(data.scale);
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  const loadInfoCategoryFromDB = () => {
    axiosCLient.get(`/categoryAndScale`)
      .then(({ data }) => {
        if (data) {
          setInfoCategoryAndScale(data.categories)
        }
      })
      .catch(({ response }) => {
        console.log(response);
      })
  }
  useEffect(() => {
    loadLast()
    loadInfoCategoryFromDB()
  }, [])

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
            {
              dataLastScale &&
              Object.keys(dataLastScale).map(key =>
                <Scales dataScale={dataLastScale[key]} key={key} />
              )
            }
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
            <p className={classes.headNewScalesP}>{infoCategoryAndScale && infoCategoryAndScale[0].name}</p>
          </div>
          <div className={classes.contentNewScales}>
            {
              infoCategoryAndScale &&
              Object.keys(infoCategoryAndScale[0].scales).map(key =>
                <Scales dataScale={infoCategoryAndScale[0].scales[key]} key={key} />
              )
            }
          </div>
        </div>
        <div className={classes.newScales}>
          <div className={classes.headNewScales}>
            <p className={classes.headNewScalesP}>{infoCategoryAndScale && infoCategoryAndScale[1].name}</p>
          </div>
          <div className={classes.contentNewScales}>
            {
              infoCategoryAndScale &&
              Object.keys(infoCategoryAndScale[1].scales).map(key =>
                <Scales dataScale={infoCategoryAndScale[1].scales[key]} key={key} />
              )
            }
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
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>
              <div className={classes.ourAdvantagesTitle}>
                <p>Удобство покупки</p>
              </div>
              <div className={classes.ourAdvantagesDescription}>
                <p>Клиенты могут просматривать и сравнивать различные модели электронных весов, делать заказы и оплачивать их онлайн, не выходя из дома или офиса.</p>
              </div>
            </div>
            <div className={classes.ourAdnvantagesCard}>
              <div className={classes.ourAdvantagesIcon}>
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div className={classes.ourAdvantagesTitle}>
                <p>Быстрая доставка</p>
              </div>
              <div className={classes.ourAdvantagesDescription}>
                <p>Обеспечиваемы быструю доставку заказанных товаров по указанному адресу, что позволяет клиентам получить свои электронные весы в кратчайшие сроки.</p>
              </div>
            </div>

          </div>
        </div>

        <div className={classes.reviews}>
          <div className={classes.headReviews}>
            <p className={classes.headReviewsP}>Отзывы клиентов</p>
          </div>
          <div className={classes.contentReviews}>
            <Reviews />
            <Reviews />
            <Reviews />
          </div>
        </div>

        <div className={classes.feedback}>
          <div className={classes.headFeedback}>
            <p className={classes.headFeedbackP}>Обратная связь</p>
          </div>
          <div className={classes.contentFeedback}>
            <div className={classes.feedbackForm}>
              <input type="text" className={classes.feedbackInput} placeholder='Имя*' />
              <input type="text" className={classes.feedbackInput} placeholder='Телефон' />
              <input type="text" className={classes.feedbackInput} placeholder='Почта*' />
              <textarea cols="30" rows="10" className={classes.feedbackArea} placeholder='Комментарий' ></textarea>
              <div className={classes.feedbakcCheckBoxContainer}>
                <input type="checkbox" />
                <p>Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *</p>
              </div>
              <div className={classes.feedbackButtonContainer}>
                <button className={classes.feedbackButton}>Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main