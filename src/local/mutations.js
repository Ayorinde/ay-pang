import { ReactiveVar } from "@apollo/client";
import {cartItemsVar} from '../cache';

export function addToCart (item) {
    const cartItems = cartItemsVar();
    const newCartItems = cartItemsVar(cartItems.concat([item]));
    console.log('... nwCartitems...: ', newCartItems);
    return newCartItems;
}