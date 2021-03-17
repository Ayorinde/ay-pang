import React from 'react'
import './index.css';
import {addToCart, toggleShowCart} from '../../local/mutations';

function ProductItem ({item}) {
    const {id, image_url, title, price} = item;
    const onAddToCart = () =>{
        addToCart(item);
        toggleShowCart(true);
    }
    return (
        <div className="product__item">
            <div className="image-container">
                <img src={image_url} alt="" />
            </div>
            <div className="image-description">
                <p>{title}</p>
                <p>From <span>${price}.00</span></p>
                <button type="button" onClick={onAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}
export default ProductItem;