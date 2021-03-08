import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Auxilary from '../../../hoc/Auxilary/Auxilary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (

        <Auxilary>
            <Backdrop
                show={props.open}
                hide={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilary>

    );
};

SideDrawer.propTypes = {
    open: PropTypes.bool,
    closed: PropTypes.func
};

export default SideDrawer;