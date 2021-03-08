import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxilary from '../../../hoc/Auxilary/Auxilary';
import PropTypes from 'prop-types';

class Modal extends Component {

    componentDidUpdate() {
        //console.log('[Modal] DidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render() {
        return (
            <Auxilary>
                <Backdrop
                    show={this.props.show}
                    hide={this.props.cancel} />,
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxilary>
        );
    }
};

Modal.propTypes = {
    show: PropTypes.bool,
    cancel: PropTypes.func
};

export default Modal;