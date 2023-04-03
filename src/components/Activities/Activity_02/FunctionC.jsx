import FunctionD from "./FunctionD";
import Color from "./MyContext";
import { useContext } from "react";

const FunctionC = () => {
    const color = useContext(Color);
    return(
        <>
            <h1 style={{background: color.bkgC}}>Função C</h1>
            <FunctionD />
        </>
    );
}

export default FunctionC;