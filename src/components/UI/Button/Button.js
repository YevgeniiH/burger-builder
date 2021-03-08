import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = props => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}>{props.children}</button>
);

Button.propTypes = {
    clicked: PropTypes.func,
    btnType: PropTypes.string
};

export default Button;