import React from 'react';

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
                        <button type="submit" className="reg-form__submit-button">Учавствовать</button>
                        <div className="reg-form__anim">
                            <img src="./img/registration/plane_01.svg" className="reg-form__anim-img" alt="самолетик"/>
                            <img src="./img/registration/plane_02.svg" className="reg-form__anim-img" alt="самолетик"/>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Registration;