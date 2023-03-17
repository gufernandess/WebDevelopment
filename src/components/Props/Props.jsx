/**
 * As props são propriedades de um componente que podem ser passadas para ele.
 * Elas são passadas como atributos quando o componente é chamado no arquivo App.jsx.
 * Então o componente os recebe como parâmetros para serem utilizados como código JSX
 * 
 *  @param {*} param0 
 * @returns 
 */

const Props = ({name}) => {
    return (
        <>
            <h1>Meu nome é: {name}</h1>
        </>
    );
}

export default Props;