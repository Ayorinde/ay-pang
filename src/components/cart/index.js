import './index.css';
import CartItem from '../cartItem';

function Cart () {
    return (
        <nav className="cart">
            <header>     
                <button className="round" type="button"> &lt; </button>
                <h4>Your Cart</h4>
            </header>
            <select>
                <option>USD</option>
            </select>
            <section>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </section>
            <section>
                <p>This is the total section</p>
            </section>
            <section>
                <p>This is the button section</p>
            </section>

        </nav>
    )
}
export default Cart;