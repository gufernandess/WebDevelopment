import FunctionB from "./FunctionB";

const FunctionA = ({x, y}) => {
    return (
        <>
        <h1>Componente A</h1>
        <FunctionB x={x} y={y} /> {/* Passando as props para o componente B */}
        </>
    );
}

export default FunctionA;