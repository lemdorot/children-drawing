import React from 'react';
import Award from './Award';
import Description from './Description';
import Features from './Features';
import MainBlock from './MainBlock';
import Plan from './Plan';

const PageMain = () => {
    return (
        <main className='page-main'>
            <MainBlock />
            <Description />
            <Features />
            <Plan />
            <Award />
        </main>
    );
};

export default PageMain;