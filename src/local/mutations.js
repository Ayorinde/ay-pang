import {cartItemsVar, showCartVar} from '../cache';

export function addToCart (item) {
    const cartItems = cartItemsVar();
    const newCartItems = cartItemsVar(cartItems.concat([{...item, qty: 1}]));
    return newCartItems;
}

export function editCartItem (itemToEdit) {
    const cartItems = cartItemsVar();
    const newCartItems = cartItems.map((item) => (item.id === itemToEdit.id)? itemToEdit: item)
    console.log('.... neCartItems...: ', newCartItems)
    //cartItemsVar(cartItems.concat([{...item, qty: 1}]));
    return cartItemsVar(newCartItems);
}

export function toggleShowCart(value){
    return showCartVar(value);
}

