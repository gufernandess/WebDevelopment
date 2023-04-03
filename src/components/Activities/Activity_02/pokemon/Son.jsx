import Grandson from "./Grandson";
import { useContext } from "react";
import MyContext from "./MyContext";

const Son = () => {
    const counter = useContext(MyContext);
    
    return (
        <>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter + 3}.png`} alt="" />
            <Grandson />
        </>
    );
};

export default Son;