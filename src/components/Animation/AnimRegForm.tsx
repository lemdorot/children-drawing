import { motion } from 'framer-motion';
import React from 'react';

const AnimRegForm = () => {
    return (
        <div className="reg-form__anim">
            <motion.img src="./img/registration/plane_01.svg" className="reg-form__anim-img" alt="самолетик"
                initial={{ x: 0, y: 0, rotate: 0 }}
                animate={{ 
                    x: [0, 0, -40, -40, -40], 
                    y: [0, 0, 5, 5, 5],
                    rotate: [0, 0, -5, -5, -5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeIn',
                    times: [0, 0.5, 0.7, 0.9, 1]
                }}
            />
            <motion.img src="./img/registration/plane_02.svg" className="reg-form__anim-img" alt="самолетик"
                initial={{ x: 0, y: 0, rotate: 0 }}
                animate={{ 
                    x: [0, 0, -15, -15, -15], 
                    y: [0, 0, 0, 0, 0],
                    rotate: [0, 0, 5, 5, 5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeIn',
                    times: [0, 0.5, 0.7, 0.9, 1]
                }}
            />
            <motion.img src="./img/registration/plane_03.svg" className="reg-form__anim-img" alt="самолетик"
                initial={{ x: 320, y: -200, rotate: -30 }}
                animate={{ 
                    x: [320, 125, -25, -20, -20], 
                    y: [-200, -20, 0, 0, 0],
                    rotate: [-30, 10, 30, 30, 30]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeIn',
                    times: [0, 0.4, 0.7, 0.9, 1]
                }}
            />
        </div>
    );
};

export default AnimRegForm;