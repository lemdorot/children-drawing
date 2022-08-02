import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer footer">

            <div className="footer__social social">

                <h4 className="social__title">Наши соцсети:</h4>

                <ul className="social__list">
                    <li className="social__item">
                        <a href="#" className="social__link">
                            <img src="./img/footer/telegram.svg" className="social__img" alt="значок телеграм"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="social__link">
                            <img src="./img/footer/ins.svg" className="social__img" alt="значок инсты"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="social__link">
                            <img src="./img/footer/vk.svg" className="social__img" alt="значок вк"/>
                        </a>
                    </li>
                </ul>

            </div>

            <nav className="footer__nav nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link">Главная</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Личный кабинет</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Контакты</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">Конфиденциальность</a>
                    </li>
                </ul>
                <p className="footer__nav-autor">@ Все права защищены. ООО”Слонум” 2022</p>
            </nav>

            <div className="footer__anchor anchor">
                <h4 className="anchor__title">Наши соцсети:</h4>
                <button type="button" className="anchor__button">
                    <img src="./img/footer/arrow-top.svg" className="anchor__img" alt="стрелочка вверх"/>
                </button>
            </div>
        </footer>
    );
};

export default Footer;