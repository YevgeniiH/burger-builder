import React from 'react';
import PropTypes from 'prop-types';
import Auxilary from '../../../../hoc/Auxilary/Auxilary';
import classes from "./DrawerToggle.module.css";

const DrawerToggle = props => {
    return (
        <Auxilary>
            <div className={classes.DrawerToggle}
                onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Auxilary>
    );
};

DrawerToggle.propTypes = {
    clicked: PropTypes.func
};

export default DrawerToggle;