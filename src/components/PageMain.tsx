import React from 'react';
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
        </main>
    );
};

export default PageMain;