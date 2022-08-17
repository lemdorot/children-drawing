import { motion } from 'framer-motion';
import React from 'react';

const AnimButton = () => {
    return (
        <motion.button type="button" className="header__button"
            animate={{ color: '#1F1D2A', background: '#fff', border: '1px solid #1F1D2A' }}
            transition={{ 
                delay: 0.5,
                duration: 2,
                ease: 'easeIn'
            }}
        >
            Войти
        </motion.button>
    );
};

export default AnimButton;