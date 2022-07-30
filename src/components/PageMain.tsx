import React from 'react';
import Description from './Description';
import Features from './Features';
import MainBlock from './MainBlock';

const PageMain = () => {
    return (
        <main className='page-main'>
            <MainBlock />
            <Description />
            <Features />
        </main>
    );
};

export default PageMain;