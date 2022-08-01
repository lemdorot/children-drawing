import React from 'react';
import Award from './Award';
import Description from './Description';
import Features from './Features';
import Interview from './Interview';
import MainBlock from './MainBlock';
import Plan from './Plan';
import Registration from './Registration';

const PageMain = () => {
    return (
        <main className='page-main'>
            <MainBlock />
            <Description />
            <Features />
            <Plan />
            <Award />
            <Registration />
            <Interview />
        </main>
    );
};

export default PageMain;