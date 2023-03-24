const FunctionB = ({x, y}) => {
    return (
        <>
        <h1>Componente B</h1>
        <h3>x: {x}, y: {y}</h3> {/* Recebendo as props do componente A */}
        </>
    );
}

export default FunctionB;