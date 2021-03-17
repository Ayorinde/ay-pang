import './index.css';
import NumberInput from '../../components/numberInput';
import {editCartItem} from '../../local/mutations';

function CartItem ({item}) {
    const {id, image_url, title, price, qty} = item;
    const setQty = (qty) => {
        const updatedItem = {...item, qty: qty }
        editCartItem(updatedItem)
    }
    return (
        <div className="cart__item clearfix">
            <header>
                <span>{title}</span>
                <span>x</span>
            </header>
            <img src={image_url} alt={title} />
            <footer>
                <NumberInput initialValue={qty}  onChangeQty={setQty}/>
                <span className="label">${price}.00</span>
            </footer>

        </div>
    )
}
export default CartItem;