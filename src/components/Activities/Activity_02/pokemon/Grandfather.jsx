import Son from "./Son";
import Counter from "./MyContext";
import { useState } from "react";

const Grandfather = () => {

    const [counter, setCounter] = useState(1);

    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <Counter.Provider value = {counter}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`} alt="" />
            <Son />
            <button onClick={handleClick}>Click</button>
        </Counter.Provider>
    );
};

export default Grandfather;