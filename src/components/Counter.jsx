import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    // Increase the value of the count
    function increaseValue() {
        setCount(count + 1);
        setMessage('');
    }

    // Decrease the value of the count
    function decreaseValue() {
        if (count === 0) {
            setMessage('Count cannot be less than 0');
        } else {
            setCount(count - 1)
            setMessage('');
        }
    }

    // Reset the value of the count
    function resetValue() {
        setCount(0);
        setMessage('');
    }


    return (
        <div className='counter'>
            <h1 className="counter-title">Counter Application</h1>

            <div className="counter-container">
                <div className="counter-value">
                    <h1>{count}</h1>
                </div>
                <div className="counter-buttons">
                    <button className="counter-button increment" onClick={increaseValue}>Increment</button>
                    <button className="counter-button decrement" onClick={decreaseValue}>Decrement</button>
                    <button className="counter-button reset" onClick={resetValue}>Reset</button>
                </div>

                <div className="counter-message">
                    <h3>{message}</h3>
                </div>
            </div>

        </div>
    )
}

export default Counter