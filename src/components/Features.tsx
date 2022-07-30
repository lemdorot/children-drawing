import React from 'react';

const Features = () => {
    return (
        <section className="page__features features">

            <h2 className="features__title">Для чего <span className='features__title--line'>нужно</span> участвовать</h2>
        
            <ul className="features__list">
                <li className="features__item">
                    <img src="./img/features/star_01.svg" width='70' height='70' alt="иконка"/>
                    <p className="features__text">Шанс занять 1 место — в вашем городе и по всей России</p>
                </li>
                <li className="features__item">
                    <img src="./img/features/winne_02.svg" width='70' height='70' alt="иконка"/>
                    <p className="features__text">Развитие самостоятельности + свободное время для родителей ;)</p>
                </li>
                <li className="features__item">
                    <img src="./img/features/certification_03.svg" width='70' height='70' alt="иконка"/>
                    <p className="features__text">Персональный диплом в разных номинациях каждому участнику</p>
                </li>
                <li className="features__item">
                    <img src="./img/features/gift_04.svg" width='70' height='70' alt="иконка"/>
                    <p className="features__text">Призы и скидки для подписчиков и авторизованных пользователей</p>
                </li>
                <li className="features__item">
                    <img src="./img/features/email_05.svg" width='70' height='70' alt="иконка"/>
                    <p className="features__text">Бесплатный диплом на email — через 1 день после конкурса</p>
                </li>
                <li className="features__item">
                    <img src="./img/features/vk_06.svg" width='70' height='70' alt="иконка"/>
                    <p className="features__text">Публикация работ победителей во ВКонтакте. <a href="#" className="features__link">Подписывайтесь!</a></p>
                </li>
            </ul>
               
            {/* <div className="main-block__image _ibg">
                <img src="./img/features/waves.svg" alt="cover"/>
            </div> */}
             
            </section>
    );
};

export default Features;