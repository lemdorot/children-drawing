import React from 'react';
import Description from './Description';
import MainBlock from './MainBlock';

const PageMain = () => {
    return (
        <main className='page-main'>
            <MainBlock />
            <Description />
        </main>
    );
};

export default PageMain;