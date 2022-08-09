import React from 'react';
import {motion} from 'framer-motion';

const Header = () => {
    return (
        <header className="header">
            <a href='#' className="header__logo">
                <img className='header__logo-icon' src="./img/header/Logo_SlonUM_V1.svg" alt="лого слонум"/>
                <p className="header__logo-text">Слон<span className="header__logo-detail">УМ</span></p>
            </a>

            <motion.button type="button" className="header__button"
                initial={{ color: '#fff', background: '#E02D05', border: 'none' }}
                animate={{ color: '#1F1D2A', background: '#fff', border: '1px solid #1F1D2A' }}
                transition={{ 
                    delay: 0.5,
                    duration: 2,
                    ease: 'easeIn'
                }}
            >
                Войти
            </motion.button>
        </header>
    );
};

export default Header;