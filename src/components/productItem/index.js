import React, {useEffect} from 'react'
import itemImage from '../../images/lumin-cart.png';
import './index.css';
import {cartItemsVar} from '../../cache';
import {addToCart} from '../../local/mutations';

function ProductItem ({item}) {
    // const addToCart = () =>{
    //     let newCartItems = [...cartItemsVar(), item]
    //     console.log('newCartItems...: ', newCartItems);
    //     cartItemsVar(newCartItems);


    // }
    console.log('.... item ....: ', item);
    const {id, image_url, title, price} = item;
    return (
        <div className="product__item">
            <div className="image-container">
                <img src={image_url} alt="" />
            </div>
            <div className="image-description">
                <p>{title}</p>
                <p>From <span>${price}.00</span></p>
                <button type="button" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    )
}
export default ProductItem;