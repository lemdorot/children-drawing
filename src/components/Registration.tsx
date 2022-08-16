import React from 'react';
import {motion} from 'framer-motion';
import Button from './UI/Button/Button';

const Registration = () => {
    return (
        <section className="page__registration registration">

            <div className="registration__discount discount">

                <div className="discount__header">
                    <img src="./img/registration/header.svg" className="discount__header-img" alt="верхняя часть рамки"/>
                    <p className="discount__header-title">
                        Скидка за репост
                    </p>
                </div>

                <div className="discount__body">
                    <h2 className="discount__body-title">Стоимость участия:</h2>
                    <div className="discount__body-price">
                        <p className="discount__body-price-current">149₽</p>
                        <p className="discount__body-price-old">299₽</p>
                    </div>
                    <h3 className="discount__body-text">При наличии репоста в соцсетях :)</h3>
                </div>

                <div className="discount__footer">
                    <p className="discount__footer-text">
                        Получить скидку:
                    </p>
                    <a href="#" className="discount__footer-link">
                        <img src="./img/registration/vk.svg" alt="значок вк"/>
                    </a>
                    <a href="#" className="discount__footer-link">
                        <img src="./img/registration/ok.svg" alt="значок одноклассники"/>
                    </a>
                </div>

            </div>

            <div className="registration__wrapper">
                
                <h2 className="registration__title">Зарегистрируйтесь, чтобы участвовать</h2>

                <form action="#" method="post" encType="multipart/form-data" className="registration__form reg-form">
                    <input type="text" name="username" placeholder="ФИО ребёнка" className="reg-form__input"/>
                    <input type="text" name="date" placeholder="Дата рождения" className="reg-form__input"/>
                    <input type="text" name="city" placeholder="Город" className="reg-form__input"/>
                    <input type="text" name="email" placeholder="Email" className="reg-form__input"/>
                    <input type="text" name="password" placeholder="Пароль" className="reg-form__input"/>

                    <div className="reg-form__check-wrapper">
                        <div className='reg-form__check-inner'>
                            <input type="checkbox" name="regcheck" value='regcheck' id='regcheck' className="reg-form__check visuallyhidden"/>
                            <label htmlFor='regcheck' className="reg-form__check-label"></label>
                        </div>
                            
                        <p className="reg-form__check-text">
                            Отправляя данные я соглашаюсь с &nbsp;
                            <a href="#" className="reg-form__check-link">Условиями конкурса</a> <br/>
                            и &nbsp;
                            <a href="#" className="reg-form__check-link">Политикой обработки данных</a>
                        </p>
                    </div>

                    <div className="reg-form__submit-wrapper">
                        <Button onClick={(e: any) => e.preventDefault()} className="reg-form__submit-button">
                            Учавствовать
                        </Button>
                        <div className="reg-form__anim">
                            <motion.img src="./img/registration/plane_01.svg" className="reg-form__anim-img" alt="самолетик"
                                initial={{ x: 0, y: 0, rotate: 0 }}
                                animate={{ 
                                    x: [0, 0, -40, -40, -40], 
                                    y: [0, 0, 5, 5, 5],
                                    rotate: [0, 0, -5, -5, -5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeIn',
                                    times: [0, 0.5, 0.7, 0.9, 1]
                                }}
                            />
                            <motion.img src="./img/registration/plane_02.svg" className="reg-form__anim-img" alt="самолетик"
                                initial={{ x: 0, y: 0, rotate: 0 }}
                                animate={{ 
                                    x: [0, 0, -15, -15, -15], 
                                    y: [0, 0, 0, 0, 0],
                                    rotate: [0, 0, 5, 5, 5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeIn',
                                    times: [0, 0.5, 0.7, 0.9, 1]
                                }}
                            />
                            <motion.img src="./img/registration/plane_03.svg" className="reg-form__anim-img" alt="самолетик"
                                initial={{ x: 420, y: -200, rotate: -30 }}
                                animate={{ 
                                    x: [420, 125, -25, -20, -20], 
                                    y: [-200, -20, 0, 0, 0],
                                    rotate: [-30, 10, 30, 30, 30]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeIn',
                                    times: [0, 0.4, 0.7, 0.9, 1]
                                }}
                            />
                        </div>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Registration;