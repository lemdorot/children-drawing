import React from 'react';

const Interview = () => {
    return (
        <section className="page__interview interview">

            <h2 className="interview__title">Вопрос/Ответ</h2>

            <ul className="interview__list">
                <li className="interview__item">
                    <p className="interview__item-text">Может ли ребёнок заниматься самостоятельно?</p>
                    <button type="button" className="interview__item-button">
                        <img src="./img/interview/plus.svg" alt="плюсик"/>
                    </button>
                </li>
                <li className="interview__item">
                    <p className="interview__item-text">Как происходит оплата?</p>
                    <button type="button" className="interview__item-button">
                        <img src="./img/interview/plus.svg" alt="плюсик"/>
                    </button>
                </li>
                <li className="interview__item">
                    <p className="interview__item-text">Есть ли гарантии усвоения материала?</p>
                    <button type="button" className="interview__item-button">
                        <img src="./img/interview/plus.svg" alt="плюсик"/>
                    </button>
                </li>
                <li className="interview__item">
                    <p className="interview__item-text">С кем будет общаться мой ребёнок?</p>
                    <button type="button" className="interview__item-button">
                        <img src="./img/interview/plus.svg" alt="плюсик"/>
                    </button>
                </li>
                <li className="interview__item">
                    <p className="interview__item-text">Каковы принципы обучения?</p>
                    <button type="button" className="interview__item-button">
                        <img src="./img/interview/plus.svg" alt="плюсик"/>
                    </button>
                </li>
                <li className="interview__item">
                    <p className="interview__item-text">Сколько раз в неделю можно заниматься?</p>
                    <button type="button" className="interview__item-button">
                        <img src="./img/interview/plus.svg" alt="плюсик"/>
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Interview;