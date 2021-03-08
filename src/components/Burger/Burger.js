import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingredients.</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired
};

export default Burger;