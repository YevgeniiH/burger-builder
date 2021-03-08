import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(o => (
                    <option key={o.value} value={o.value}>{o.displayValue}</option>
                ))}
            </select>;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};


Input.propTypes = {
    inputType: PropTypes.string
};


export default Input;
