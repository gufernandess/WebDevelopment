import { useState, useEffect } from "react";

const Cities = () => {
    const [cities, setCities] = useState([
        {name: "Quixadá", votes: 0},
        {name: "Paraipaba", votes: 0},
        {name: "Fortaleza", votes: 0},
        {name: "Cerquilho", votes: 0}
    ]);

    const [voted, setVoted] = useState({
        mostVoted: "",
        lessVoted: ""
    });

    const handleClick = event => {
        setCities({...cities, [event.target.name]: cities[event.target.value].votes++});
    }

    useEffect(() => {}, [cities, voted]);

    return(
        <>
            <h1>{cities[0].name}</h1>
            <h3>{cities[0].votes}</h3>
            <button name="Quixadá" value={0} onClick={handleClick}>Button</button>

            <h1>{cities[1].name}</h1>
            <h3>{cities[1].votes}</h3>
            <button name="Paraipaba" value={1} onClick={handleClick}>Button</button>

            <h1>{cities[2].name}</h1>
            <h3>{cities[2].votes}</h3>
            <button name="Fortaleza"value={2} onClick={handleClick}>Button</button>

            <h1>{cities[3].name}</h1>
            <h3>{cities[3].votes}</h3>
            <button name="Cerquilho" value={3} onClick={handleClick}>Button</button>

            <h2>Mais votado(s): {voted.mostVoted}</h2>
            <h2>Menos votado(s): {voted.lessVoted}</h2>
        </>
    );
}

export default Cities;