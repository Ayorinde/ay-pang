import './index.css';
import NumberInput from '../../components/numberInput';

function CartItem () {
    let item = {id: '1', title: 'Dark Circle Defense', image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/reload-exfoliating-rub.png', price: 30}
    const {id, image_url, title, price} = item;
    return (
        <div className="cart__item clearfix">
            <header>
                <span>{title}</span>
                <span>x</span>
            </header>
            <img src={image_url} alt={title} />
            <footer>
                <NumberInput />
                <span className="label">${price}.00</span>
            </footer>

        </div>
    )
}
export default CartItem;