import React, { useEffect } from 'react';
import { Container, ContainerFluid } from '../../../../../Auth/Containers';
import {Cards, Slider} from '../../../../../Auth/pages/HomePage/List/Card/Card';
import pensil from '../../../../../assets/icons/pensil.svg'
import calendar from '../../../../../assets/icons/calendar.svg'
import clock from '../../../../../assets/icons/clock.svg'
import offline from '../../../../../assets/icons/offline.svg'
import online from '../../../../../assets/icons/online.svg'
import eye from '../../../../../assets/icons/eye.svg'
import comment from '../../../../../assets/icons/comment.svg'

function Card({id}) {
  
  useEffect( async () => {
    let [card_, recomended_] = await Promise.all([
      fetch(`https://dream-team-n1.herokuapp.com/api/cards?id=${id[0]}`),
      fetch(`https://dream-team-n1.herokuapp.com/api/recomendet?id=${id[1]}`)
    ])
    let [card, recomended] = await Promise.all([
      card_.json(), recomended_.json()
    ])
    console.log(card, recomended);
  }, [])

  return (
    <>
      <ContainerFluid>
        <Cards>
          <Container>
            <div className='wrapper'>
              <div className='info'>
                <h1>Abbos Janizakov</h1>
                <ul className='content'>
                  <li>
                    <img src={pensil} alt="pensil" />
                    <p>UX/UI Design</p>
                  </li>
                  <li>
                    <img src={calendar} alt="pensil" />
                    <p>21/09/2022</p>
                  </li>
                  <li>
                    <img src={clock} alt="pensil" />
                    <p>14:00</p>
                  </li>
                  <li>
                    <img src={online} alt="pensil" />
                    <p>Online</p>
                  </li>
                </ul>
                <h4>Bo'lishing:</h4>
                <ul className='socials'>
                  <li>
                    <a href="#" target='_blank'><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#" target='_blank'><i className="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#" target='_blank'><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" target='_blank'><i className="fab fa-telegram-plane"></i></a>
                  </li>
                </ul>
                <img src="" alt="" />
              </div>
              <div className='desc'>
                <h3>Dizayn bo'yicha master maslahatlar</h3>
                <p className='info-text'>Reference site about giving information</p>
                <img className='info-img' src="https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g=" alt="" />
                <div>
                  <p className='text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                  <p className='text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                  <p className='text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
                </div>
                <ul>
                  <li>
                    <img src={eye} alt="" />
                    <p>245</p>
                  </li>
                  <li>
                    <img src={comment} alt="" />
                    <p>izohlar</p>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Cards>
      </ContainerFluid>
      <Slider>
        <ul>
          <li>
            <img src='https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g='alt='' role="presentation" />
            <div className='inner'>
              <h2>dfsdf sf s f s</h2>
              <h3>dfs sd sfsd </h3>
              <div className='wrapper'>
                <div>
                  <span>
                    <img src={pensil} alt="" />
                    <p>dfsfsdf </p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>dfsdfds</p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={clock} alt="" />
                    <p>sdfsdfsdf</p>
                  </span>
                  <span>
                    <img src={online} alt="" />
                    <p>sdsdf</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src='https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g='alt='' role="presentation" />
            <div className='inner'>
              <h2>dfsdf sf s f s</h2>
              <h3>dfs sd sfsd </h3>
              <div className='wrapper'>
                <div>
                  <span>
                    <img src={pensil} alt="" />
                    <p>dfsfsdf </p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>dfsdfds</p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={clock} alt="" />
                    <p>sdfsdfsdf</p>
                  </span>
                  <span>
                    <img src={online} alt="" />
                    <p>sdsdf</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src='https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g='alt='' role="presentation" />
            <div className='inner'>
              <h2>dfsdf sf s f s</h2>
              <h3>dfs sd sfsd </h3>
              <div className='wrapper'>
                <div>
                  <span>
                    <img src={pensil} alt="" />
                    <p>dfsfsdf </p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>dfsdfds</p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={clock} alt="" />
                    <p>sdfsdfsdf</p>
                  </span>
                  <span>
                    <img src={online} alt="" />
                    <p>sdsdf</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src='https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g='alt='' role="presentation" />
            <div className='inner'>
              <h2>dfsdf sf s f s</h2>
              <h3>dfs sd sfsd </h3>
              <div className='wrapper'>
                <div>
                  <span>
                    <img src={pensil} alt="" />
                    <p>dfsfsdf </p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>dfsdfds</p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={clock} alt="" />
                    <p>sdfsdfsdf</p>
                  </span>
                  <span>
                    <img src={online} alt="" />
                    <p>sdsdf</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src='https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?b=1&k=20&m=1288385045&s=170667a&w=0&h=3M3ZRl1bxOGxcvmYZ-TOtuJ3idm0psm4c7GFba1TA5g='alt='' role="presentation" />
            <div className='inner'>
              <h2>dfsdf sf s f s</h2>
              <h3>dfs sd sfsd </h3>
              <div className='wrapper'>
                <div>
                  <span>
                    <img src={pensil} alt="" />
                    <p>dfsfsdf </p>
                  </span>
                  <span>
                    <img src={calendar} alt="" />
                    <p>dfsdfds</p>
                  </span>
                </div>
                <div>
                  <span>
                    <img src={clock} alt="" />
                    <p>sdfsdfsdf</p>
                  </span>
                  <span>
                    <img src={online} alt="" />
                    <p>sdsdf</p>
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Slider>
    </>
   
  );
}

export default Card;
