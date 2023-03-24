import { Children } from 'react';

const Supermarket = ({ children, name }) => {
    return (
        <>
        <h1 className="">Supermarket { name }</h1>
        {Children.map(children, child => { // Children.map() é uma função que percorre os filhos de um componente para aplicar determinadas mudanças
            return (
                <div style={{background: "red"}}>
                    { child }
                </div>
            );
        })}
        </>
    );
}

const Lettuce = ({ name, supermarket }) => {
    return (
        <>
        <h1 className="">Legume { name } do mercado { supermarket }</h1>
        </>
    );
}

const Drink = ({ name }) => {
    return (
        <>
        <h1 className="">Bebida { name }</h1>
        </>
    );
}

export {
    Supermarket,
    Lettuce,
    Drink
}