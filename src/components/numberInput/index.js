import React, {useState, useEffect} from 'react'
import './index.css';

function NumberInput ({initialValue, onChangeQty}) {
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
        value >1? setValue(--value): setValue(value);
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