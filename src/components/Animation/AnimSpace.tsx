import { motion } from 'framer-motion';
import React from 'react';

const AnimSpace = () => {
    return (
        <motion.div className='space__wrapper'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        delay: 0.5,
                        duration: 2,
                        ease: 'easeIn'
                    }}
                >
                    <img src="./img/main-block/bg.png" width='864' height='693' alt="cover"/>
                    <motion.img className='space__elephant' src="./img/main-block/elephant.svg" width='131' height='112' alt="Слон"
                        initial={{ rotate: -11, x: 0 }}
                        animate={{ rotate: 41, x: 10 }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                    <motion.img className='space__lamp' src="./img/main-block/lamp.svg" width='135' height='135' alt="Лампочка"
                        initial={{ rotate: 15 }}
                        animate={{ rotate: [15, 40, -45, 20, 25, 15] }}
                        transition={{ 
                            delay: 1.3,
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0, 0.108, 0.4, 0.691, 0.858, 1]
                        }}
                    />
                    <motion.img className='space__rocket' src="./img/main-block/rocket.svg" width='170' height='140' alt="Ракета"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -70, 0] }}
                        transition={{ 
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeOut',
                            times: [0, 0.666, 1]
                        }}
                    />
                    <motion.img className='space__clock' src="./img/main-block/clock.svg" width='86' height='105' alt="Будильник"
                        initial={{ rotate: 0, scale: 0.7 }}
                        animate={{ rotate: -360, scale: [0.7, 1, 0.7] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0, 0.5, 1]
                        }}
                    />
                    <motion.img className='space__plane' src="./img/main-block/plane.svg" width='115' height='45' alt="Самолет"
                        initial={{ rotate: 0, scale: 0.5 }}
                        animate={{ rotate: [0, 45, 0], scale: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0, 0.5, 1]
                        }}
                    />
                    <motion.img className='space__planet-lines' src="./img/main-block/planet-lines.svg" width='50' height='50' alt="Полосатая планета"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 0, 30, 0] }}
                        transition={{ 
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0, 0.066, 0.5666, 1]
                        }}
                    />
                    <motion.img className='space__big-planet' src="./img/main-block/big-planet.svg" width='75' height='75' alt="Большая планета"
                        initial={{ x: 0, y: 0 }}
                        animate={{ x: -50, y: 20 }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'reverse'
                        }}
                    />
                    <motion.img className='space__atom' src="./img/main-block/atom.svg" width='50' height='50' alt="Атом"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 45 }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeOut',
                            repeatType: 'reverse'
                        }}
                    />
                    <motion.img className='space__dark-planet' src="./img/main-block/dark-planet.svg" width='51' height='51' alt="Темная планета"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -45 }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'reverse'
                        }}
                    />
                    <motion.img className='space__division' src="./img/main-block/division.svg" width='33' height='39' alt="Деление"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 0.5, 0.7], opacity: [0, 1, 0] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0, 0.25, 0.5]
                        }}
                    />
                    <motion.img className='space__plus' src="./img/main-block/plus.svg" width='30' height='30' alt="Деление"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 0.5, 0.7], opacity: [0, 1, 0] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            times: [0.5, 0.75, 0.95]
                        }}
                    />
                    <motion.img className='space__balloon' src="./img/main-block/balloon.svg" width='70' height='100' alt="Воздушный шар"
                        initial={{ y: 0 }}
                        animate={{ y :34 }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'reverse'
                        }}
                    />
                    <motion.img className='space__palette' src="./img/main-block/palette.svg" width='72' height='51' alt="Палитра"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, 0, 360] }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'reverse',
                            times: [0, 0.25, 0.83]
                        }}
                    />
                    <img className='space__stars-bg' src="./img/main-block/stars.svg" width='704' height='510' alt="Звезды"/>
                </motion.div>
    );
};

export default AnimSpace;