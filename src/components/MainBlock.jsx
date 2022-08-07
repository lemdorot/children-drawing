import React, { useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {motion} from 'framer-motion';

const MainBlock = () => {
    const [trigger, setTrigger] = useState(false)
    const [mode, setMode] = useState("out-in")

    useEffect(() => {
        setTrigger(true)
      }, [])

    return (
        <section className="page-main__main-block main-block">
            <div className="main-block__wrapper">
                <p className="main-block__prev">От компании СлонУМ</p>
                <h1 className="main-block__title">Всероссийский конкурс<br/>Детского рисунка</h1>
                <p className="main-block__text">Учавствуйте в конкурсе и получайте призы в различных<br/> номинациях детского рисунка для всех возрастов</p>

                <div className="main-block__inner">
                    <button type="button" className="main-block__button">Учавствовать</button>

                    <div className="main-block__counter counter">
                        
                        <div className="counter__item">
                            <div className="counter__number">01</div>
                            <div className="counter__value">дней</div>
                        </div>

                        <motion.div className="counter__item separater"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                duration: 0.5,
                                repeatDelay: 1,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        >:</motion.div>

                        <div className="counter__item">
                            <div className="counter__number">09</div>
                            <div className="counter__value">часов</div>
                            <div className="counter__city">по МСК</div>
                        </div>
                     
                        <motion.div className="counter__item separater"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                duration: 0.5,
                                repeatDelay: 1,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        >:</motion.div>

                        <div className="counter__item">
                            <div className="counter__number">43</div>
                            <div className="counter__value">минут</div>
                        </div>

                    </div>
                </div>
            </div>
        
            <div className="main-block__image">
                <img src="./img/main-block/animation_picture.svg" alt="cover"/>
            </div>
        </section>
    );
};

export default MainBlock;