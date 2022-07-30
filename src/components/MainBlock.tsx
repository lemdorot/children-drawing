import React from 'react';

const MainBlock = () => {
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

                        <div className="counter__item separater">:</div>

                        <div className="counter__item">
                            <div className="counter__number">09</div>
                            <div className="counter__value">часов</div>
                            <div className="counter__city">по МСК</div>
                        </div>

                        <div className="counter__item separater">:</div>

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