import React from 'react';
import classes from './Button.module.sass';

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
    className?: string;
}

const Button: React.FC<IButtonProps> = ({onClick, children, className, ...props}) => {
    return (
        <button {...props} onClick={onClick} className={className + ' ' + classes.myBtn}>
            {children}
        </button>
    );
};

export default Button;