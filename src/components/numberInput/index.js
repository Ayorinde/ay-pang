import React, {useState, useEffect} from 'react'
import './index.css';
import {deleteCartItem} from '../../local/mutations'

function NumberInput ({initialValue, onChangeQty, cartItem}) {
    let [value, setValue] = useState(initialValue);

    useEffect(()=>{
        if(value)
        onChangeQty(value);
    },[value])

    useEffect(()=>{
        setValue(initialValue)
    },[initialValue])

    const increment = () =>{
        setValue(++value);
    }
    const decrement = () => {
        if(value > 1){
            setValue(--value)
        }
        else{
            deleteCartItem(cartItem);
        }
        
    }
    return (
        <div className="number-input">
            <span className="minus" onClick={decrement}> - </span>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <span className="plus" onClick={increment}> + </span>
        </div>
    )
}
export default NumberInput;