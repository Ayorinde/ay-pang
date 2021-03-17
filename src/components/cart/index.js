import React, {useState} from 'react';
import { useReactiveVar } from '@apollo/client';
import './index.css';
import CartItem from '../cartItem';
import {getCartItems} from '../../local/queries';
import {toggleShowCart, setCurrency as setTheCurrency} from '../../local/mutations'
import {cartItemsVar, showCartVar} from '../../cache';

function Cart () {
    const cartItems = useReactiveVar(cartItemsVar);
    const showCart = useReactiveVar(showCartVar);
    const [currency, setCurrency] = useState('USD');
    const onSetCurrency = (e) =>{
        let value = e.target.value;
        setCurrency(value);
        setTheCurrency(value);
    }

    if(!cartItems || cartItems.length < 1) return null;
    return (
        <nav className={showCart? "cart show": "cart hide"}>
            <header>     
                <button className="round" type="button" onClick={()=> toggleShowCart(false)}> &lt; </button>
                <h4>Your Cart</h4>
            </header>
            <select value={currency} onChange={onSetCurrency}>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
            </select>
            <section>
                {
                    cartItems.map((item) => <CartItem key={item.id} item={item} />)
                }
            </section>
            <section className="cart__subtotal">
                <p><span>Subtotal </span> <span>${cartItems.reduce((accumulator, current) => accumulator + current.price * current.qty, 0)}.00</span></p>
                <button className="btn" type="button">MAKE THIS A SUBSCRIPTION (SAVE 20%) </button>
                <button className="btn btn-primary" type="button">PROCEED TO CHECKOUT</button>
            </section>
        </nav>
    )
}
export default Cart;