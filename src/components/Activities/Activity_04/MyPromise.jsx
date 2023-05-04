import { useEffect, useState } from "react";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.floor(Math.random() * 10);
        console.log(number);

        if(number === 1) {
            return reject({number: number, message: "Erro de conexão"});
        } else if(number === 2) {
            return reject({number: number, message: "Dados inválidos"});
        } else {
            return resolve([
                {id: 1, name: "Beltrano", ira: 6.7},
                {id: 2, name: "Fulano", ira: 8.3},
                {id: 3, name: "Ciclano", ira: 5.2}
            ]);
        }

    }, 3000);
});

const MyPromise = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        promise
        .then(object => setResponse(object))
        .catch(error => alert(error.message));
    }, []);

    return (
        <>
            {response.map(object => <h1>{object.id}</h1>)}
            <br />
            {response.map(object => <h2>{object.name}</h2>)}
            <br />
            {response.map(object => <h3>{object.ira}</h3>)}
        </>
    );
}

export default MyPromise;