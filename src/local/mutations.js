import {cartItemsVar, showCartVar} from '../cache';

export function addToCart (item) {
    const cartItems = cartItemsVar();
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if(existingItem){
        let newQty = existingItem.qty + 1;
        let withModifiedItem = cartItems.map((cartItem) => (cartItem.id === item.id)? {...item, qty: newQty}: cartItem);
        return cartItemsVar(withModifiedItem)
    }
    const newCartItems = cartItemsVar(cartItems.concat([{...item, qty: 1}]));
    return newCartItems;
}

export function editCartItem (itemToEdit) {
    const cartItems = cartItemsVar();
    const newCartItems = cartItems.map((item) => (item.id === itemToEdit.id)? itemToEdit: item)
    return cartItemsVar(newCartItems);
}

export function toggleShowCart(value){
    return showCartVar(value);
}

