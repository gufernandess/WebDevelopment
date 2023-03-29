import Color from "./MyContext";
import { useContext } from "react";

/**
 * O useContext é uma forma de consumir o contexto.
 * Cria-se uma constante que recebe o contexto que será consumido.
 * Assim os dados de FunctionA virão para FunctionD.
 * 
 * @returns 
 */

const FunctionD = () => {
    const color = useContext(Color);

    return(
        <>
            <h1 style={{background: color}}>Função D</h1>
        </>
    );
}

export default FunctionD;