import Color from "./MyContext";

/**
 * Uma forma de utilizar contexto é através do consumer (consumir).
 * O consumer significa que o componente atual é o consumidor dos dados que serão passados adiante.
 * Porém, o consumer é considerado defasado e existem formas melhores de consumir esses dados.
 * 
 * @returns 
 */

const FunctionB = () => {
    return(
        <Color.Consumer>
            {
                (color) => {
                    return (
                        <h1 style={{background: color}}>Função B</h1>
                    );
                }
            }
        </Color.Consumer>
    );
}

export default FunctionB;