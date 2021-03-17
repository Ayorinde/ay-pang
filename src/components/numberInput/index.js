import './index.css';

function NumberInput () {
    return (
        <div className="number-input">
            <span className="minus"> - </span>
            <input type="text" />
            <span className="plus"> + </span>
        </div>
    )
}
export default NumberInput;