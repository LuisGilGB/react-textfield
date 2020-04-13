import React from 'react';
import './TextField.css';

const DEFAULT_CLASS_NAME = 'react-textfield';

const TextField = props => {
    const {
        children,
        className = '',
        style,
        onClick,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={`${DEFAULT_CLASS_NAME} ${className}`.trim()}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default TextField;