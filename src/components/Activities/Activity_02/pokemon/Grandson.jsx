import { useContext } from "react";
import MyContext from "./MyContext";

const Grandson = () => {
    const counter = useContext(MyContext);

    return (
        <>
           <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter + 6}.png`} alt="" />
        </>
    );
};

export default Grandson;