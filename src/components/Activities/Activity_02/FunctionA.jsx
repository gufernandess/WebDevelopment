import FunctionB from "./FunctionB";
import FunctionC from "./FunctionC";
import Colors from "./MyContext";

/**
 * O valor do contexto é passado através do atributo value.
 * O provider significa que o componente atual é o provedor dos dados que serão passados adiante.
 *
 * @returns 
 */

const FunctionA = () => {

    const colors = {bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue"};

    return (
        <Colors.Provider value={colors}>
            <>
                <h1 style={{background: colors.bkgA}}>Função A</h1>
                <FunctionB />
                <FunctionC />
            </>
        </Colors.Provider>
    );
}

export default FunctionA;