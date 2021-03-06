import React from 'react';
import PropTypes from 'prop-types';
import classes from './BuildControl.module.css';

const BuildControl = props => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}>Less</button>
            <button
                className={classes.More}
                onClick={props.added}>More</button>
        </div>
    );
};

BuildControl.propTypes = {
    label: PropTypes.string,
    added: PropTypes.func,
    removed: PropTypes.func,
    disabled: PropTypes.bool
};

export default BuildControl;