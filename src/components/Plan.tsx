import React from 'react';

const Plan = () => {
    return (
        <section className="page__plan plan">

            <h2 className="plan__title">Пошаговый <span className='title--line'>план</span></h2>

            <ul className="plan__body">
                <li>
                    <img src="./img/plan/trajectory.svg" width='1303.71' height='448' alt="траектория" />
                </li>
                <li className="plan__column">
                    <div className="plan__column-count">1</div>
                    <p className="plan__column-text">
                        Зарегистрируйтесь <br/> на конкурс &nbsp;
                        <a href="#" className="plan__column-link">Здесь</a>
                    </p>
                </li>
                <li className="plan__column">
                    <div className="plan__column-count">2</div>
                    <p className="plan__column-text">Выполните все <br/> условия конкурса</p>
                </li>
                <li className="plan__column">
                    <div className="plan__column-count">3</div>
                    <p className="plan__column-text">
                        Загрузите рисунок &nbsp;
                        <a href="#" className="plan__column-link">Здесь</a><br/>
                         или в Личном кабинете
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Plan;