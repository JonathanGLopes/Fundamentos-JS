import { useState } from "react";
import './Advices.css';

export default function Advices(){
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    return (
        <div className="advices">
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get Advice</button>
            <p>You have read {count} pieces of advice</p>
        </div>
    )
}