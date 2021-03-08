import React, { Component } from 'react';
import Auxilary from '../../../hoc/Auxilary/Auxilary';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        //console.log('[Order summary] DidUpdate');
    }

    render() {
        let ingredientsSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return (
                    <li key={key}>
                        <span style={{ textTransform: 'capitalize' }}>{key}</span>: {this.props.ingredients[key]}
                    </li>
                );
            });
        return (
            <Auxilary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType='Danger'
                    clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button
                    btnType='Success'
                    clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxilary>
        );
    }
};

OrderSummary.propTypes = {
    ingredients: PropTypes.object,
    purchaseCancel: PropTypes.func,
    purchaseContinue: PropTypes.func,
    price: PropTypes.number
};

export default OrderSummary;