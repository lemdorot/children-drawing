import React from 'react';

const Award = () => {
    return (
        <section className="page__award award">

            <div className="award__wrapper">

                <h2 className="award__title">Выдаём <span className='title--line'>дипломы</span> участникам</h2>

                <p className="award__description">
                    Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!
                </p>
                <p className="award__description">
                    Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.
                </p>
                <p className="award__description">
                    Со слоном к победам напролом!
                </p>
            </div>

            <div className="award__diploma diploma">
                <div className="diploma__wrapper">

                    <div className="diploma__desc">
                        <h2 className="diploma__title">Диплом</h2>
                        <h3 className="diploma__subtitle">Награждается</h3>
                        <h4 className="diploma__respondent">Гасенко Алина</h4>
                        <div className="diploma__seporater"></div>
                        <h5 className="diploma__description">1 место</h5>
                        <p className="diploma__text">
                            во Всероссийском конкурсе детских рисунков <br/>
                            «Моё счастливое лето» <br/>
                            Возраст от 0 до 4 лет, г. Калуга
                        </p>
                    </div>

                    <div className="diploma__details">
                        <img className="diploma__logo" src="./img/award/logo.png" alt="лого слонум"/>
                        <p className="diploma__date">15.08.2022</p>
                        <img className="diploma__print" src="./img/award/print.png" alt="изображение печати"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Award;