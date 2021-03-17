import './index.css';
import cartImage from '../../images/lumin-cart.png';
import {toggleShowCart} from '../../local/mutations';

function Navbar () {
    return (
        <nav>
            <ul>
                <li>LUMIN</li>
                <li>Shop</li>
                <li>Learn</li>
                <li>Account</li>
                <li onClick={() => toggleShowCart(true)}><img src={cartImage} alt="cart icon" /><span className="cart__item-count"><sup>2</sup></span></li>
            </ul>
        </nav>
    )
}
export default Navbar;