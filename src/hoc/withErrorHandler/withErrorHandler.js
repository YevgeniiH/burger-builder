import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxilary from '../Auxilary/Auxilary';

const withErrorHandler = (WrappedComp, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Auxilary>
                    <Modal
                        show={this.state.error}
                        cancel={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComp {...this.props}></WrappedComp>
                </Auxilary>
            );
        }
    };
};

export default withErrorHandler;