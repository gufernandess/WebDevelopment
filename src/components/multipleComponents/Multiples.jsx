/**
 * Um único arquivo pode exportar vários componentes
 * @returns 
 */

const Header = () => {
    return (
        <>
        <h1>Cabeçalho</h1>
        </>
    );
}

const Body = () => {
    return (
        <>
        <h1>Corpo</h1>
        </>
    );
}

const Footer = () => {
    return (
        <>
        <h1>Rodapé</h1>
        </>
    );
}

export { // Forma de exportar vários componentes de uma vez
    Header,
    Body,
    Footer
}