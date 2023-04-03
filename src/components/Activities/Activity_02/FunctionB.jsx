import Colors from "./MyContext";

/**
 * Uma forma de utilizar contexto é através do consumer (consumir).
 * O consumer significa que o componente atual é o consumidor dos dados que serão passados adiante.
 * Porém, o consumer é considerado defasado e existem formas melhores de consumir esses dados.
 * 
 * @returns 
 */

const FunctionB = () => {
    return(
        <Colors.Consumer>
            {
                (color) => {
                    return (
                        <h1 style={{background: color.bkgB}}>Função B</h1>
                    );
                }
            }
        </Colors.Consumer>
    );
}

export default FunctionB;