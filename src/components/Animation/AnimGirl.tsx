import { motion } from 'framer-motion';
import React from 'react';

const AnimGirl = () => {
    return (
        <div className='girl__img-wrapper'>
            <img className='girl__img' src="./img/main-block/girl.svg" width='276' height='331' alt="Девочка"/>
            <motion.img className='girl__img-pen' src="./img/main-block/pen.svg" width='70' height='71' alt="Карандаш"
                initial={{ rotate: 0, y: 0 }}
                animate={{ 
                    rotate: [15,75,45,60,-30,0,-15,25,5],
                    x: [0,15,15,15,0,0,0,0,0],
                    y: [10,5,5,5,0,0,0,10,10]
                }}
                transition={{ 
                    duration: 4.5,
                    repeat: Infinity
                }}
            />
        </div>
    );
};

export default AnimGirl;