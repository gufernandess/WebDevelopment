import FunctionB from "./FunctionB";
import FunctionC from "./FunctionC";
import Color from "./MyContext";

/**
 * O valor do contexto é passado através do atributo value.
 * O provider significa que o componente atual é o provedor dos dados que serão passados adiante.
 *
 * @returns 
 */

const FunctionA = () => {

    const color = "red";

    return (
        <Color.Provider value={color}>
            <>
                <h1 style={{background: color}}>Função A</h1>
                <FunctionB />
                <FunctionC />
            </>
        </Color.Provider>
    );
}

export default FunctionA;