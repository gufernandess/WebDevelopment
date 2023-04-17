import { useState } from "react";
import FirstSon from "./FirstSon";
import SecondSon from "./SecondSon";
import ThirdSon from "./ThirdSon";

const Dad = ({vector}) => {
    const [biggest, setBiggest] = useState(0);
    const [smallest, setSmallest] = useState(0);
    const [media, setMedia] = useState(0);

    const calculate_biggest = (value) => setBiggest(value);
    const calculate_smallest = (value) => setSmallest(value)
    const calculate_media = (value) => setMedia(value);

    return(
        <>
            <h1>Array: {vector}</h1>

            <br />

            <h2>Maior: {biggest}</h2>
            <h2>Menor: {smallest}</h2>
            <h2>Média: {media}</h2>

            <FirstSon vector={vector} calculate={calculate_biggest} />
            <SecondSon vector={vector} calculate={calculate_smallest} />
            <ThirdSon vector={vector} calculate={calculate_media} />
        </>
    );
}

export default Dad;