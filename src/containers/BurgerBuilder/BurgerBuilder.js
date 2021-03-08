import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxilary from '../../hoc/Auxilary/Auxilary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from "../../axios-orders";
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';



class BurgerBuilder extends Component {

    state = {
        purchasing: false
    };

    componentDidMount() {
        this.props.onInitIngredient()
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    cancelPurchaseHandler = () => {
        this.setState({ purchasing: false });
    }

    continuePurchaseHandler = () => {
        this.props.onPurchaseInit();
        this.props.history.push({ pathname: '/checkout' });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    render() {
        const disableInfo = {
            ...this.props.ings
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        };

        let orderSummury = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.props.ings) {
            burger = (
                <Auxilary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disableInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        purchase={this.purchaseHandler}
                        price={this.props.price} />
                </Auxilary>);
            orderSummury = <OrderSummary
                price={this.props.price}
                purchaseContinue={this.continuePurchaseHandler}
                purchaseCancel={this.cancelPurchaseHandler}
                ingredients={this.props.ings} />
        }

        return (
            <Auxilary>
                <Modal
                    show={this.state.purchasing}
                    cancel={this.cancelPurchaseHandler}>
                    {orderSummury}
                </Modal>
                {burger}
            </Auxilary>
        );
    };
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredient: () => dispatch(actions.initIngredients()),
        onPurchaseInit: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));