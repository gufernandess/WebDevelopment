import { Children } from 'react';

const Hero = ({name, img}) => {
    return(
        <>
            <h1>Name: {name}</h1>
            <img src={img} />
        </>
    );
};

const Enemy = ({name, img}) => {
    return(
        <>
            <h1>Name: {name}</h1>
            <img src={img} />
        </>
    );
};

const Arena = ({children, arena}) => {
    return(
        <>
            <h1>Name: { arena }</h1>
            
            {Children.map(children, child => {
            return (
                <div style={{border: "2px solid white"}}>
                    { child }
                </div>
            );
        })}
        </>
    );
};

const World = (props) => {
    return(
        <>
            { props.children }
        </>
    );
};

export {
    World,
    Arena,
    Hero,
    Enemy
};