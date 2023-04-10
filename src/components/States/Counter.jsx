import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [odd, setOdd] = useState(true);

    useEffect(
        () => {count % 2 === 0 ? setOdd(false) : setOdd(true)},
        [count]
    );

    function handleCLick() {
        setCount(count + 1);
    }

    return(
        <>
            <h1>{count}</h1>
            <h1>Is it odd? {odd+""}</h1>
            <button onClick={handleCLick}>Button</button>
        </>
    );
}

export default Counter;