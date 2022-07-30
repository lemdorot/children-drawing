import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <a href='#' className="header__logo">
                <img className='header__logo-icon' src="./img/header/Logo_SlonUM_V1.svg" alt="лого слонум"/>
                <p className="header__logo-text">Слон<span className="header__logo-detail">УМ</span></p>
            </a>

            <button type="button" className="header__button">Войти</button>
        </header>
    );
};

export default Header;