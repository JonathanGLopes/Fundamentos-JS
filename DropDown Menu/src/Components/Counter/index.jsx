import React, {useState} from "react";
import './counter.css';

export default function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div className="counter">
            <button className="sub" onClick={() => setCount(count -1)}>-</button>
            <span>{count}</span>
            <button className="plus" onClick={() => setCount(count +1)}>+</button>
        </div>
    )
}