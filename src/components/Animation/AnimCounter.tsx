import { motion } from 'framer-motion';
import React from 'react';

const AnimCounter = () => {
    return (
        <div className="main-block__counter counter">
                        
            <div className="counter__item">
                <div className="counter__number">01</div>
                <div className="counter__value">дней</div>
            </div>

            <motion.div className="counter__item separater"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.5,
                    repeatDelay: 1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >:</motion.div>

            <div className="counter__item">
                <div className="counter__number">09</div>
                <div className="counter__value">часов</div>
                <div className="counter__city">по МСК</div>
            </div>
            
            <motion.div className="counter__item separater"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.5,
                    repeatDelay: 1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >:</motion.div>

            <div className="counter__item">
                <div className="counter__number">43</div>
                <div className="counter__value">минут</div>
            </div>

        </div>
    );
};

export default AnimCounter;