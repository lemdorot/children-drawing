import React from 'react';

const Subscribe = () => {
    return (
        <section className="page__subscribe subscribe">

            <h2 className="subscribe__title">Подпишись на нашу рассылку</h2>
            <h3 className="subscribe__subtitle">Обещаем присылать только самое важное<br/> и интересное :)</h3>

            <form action="#" method="post" encType="multipart/form-data" className="subscribe__form" >
                <input type="text" name="email" placeholder="Email" className="subscribe__form-input"/>
                <button type="submit" className="subscribe__form-btn">Отправить</button>
            </form>

            <div className="subscribe__check-wrapper">
                <div className="subscribe__check-inner">
                    <input type="checkbox" name="checkbox" id='sub__check' className="subscribe__check visuallyhidden"/>
                    <label htmlFor="sub__check" className="subscribe__check-label"></label>
                </div>
                
                <p className="subscribe__check-text">
                    Отправляя данные я соглашаюсь с &nbsp;
                    <a href="#" className="subscribe__check-link">Условиями конкурса</a><br/>
                    и &nbsp;
                    <a href="#" className="subscribe__check-link">Политикой обработки данных</a>
                </p>
            </div> 
        </section>
    );
};

export default Subscribe;