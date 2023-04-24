import { useEffect, useState } from "react"

const promise = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const myInt = Math.floor(Math.random() * 10) + 1;
                return myInt % 2 == 0 ? resolve(myInt) : reject("Erro");
            }
            ,
            3000
        )
    }
)

const Promises = () => {

    /**
     * Aqui criamos uma variável de estado para armazenar o resultado da promise.
     * 
     * Ela começa com "empty" e depois é atualizada com o resultado da promise.
     */

    const [text, setText] = useState("Empty");

    useEffect(
        () => {
            promise
            .then(
                (message) => {
                    setText(message);
                }
            )
            .catch(error => console.log(error));
        }
        ,
        []
    )

    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

export default Promises;