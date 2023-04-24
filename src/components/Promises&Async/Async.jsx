/**
 * Esse é o corpo de uma promise, onde temos o construtor da promise,
 * que recebe uma função (executor) com dois parâmetros, resolve e reject.
 * 
 * O executor é executado imediatamente pela chamada new Promise,
 * ele contém o código que dispara a ação assíncrona.
 * 
 * O executor deve chamar resolve ou reject quando terminar.
 * 
 * Ele chama resolve com o resultado da ação assíncrona quando termina com sucesso.
 * 
 * Ou chama reject quando ocorre um erro.
 * 
 */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const myInt = Math.floor(Math.random() * 10) + 1;

        return myInt % 2 == 0 ? resolve(myInt) : reject("Erro");
    }, 3000);
});

/**
 * O corpo de uma função assíncrona é executado quando a função é chamada.
 * 
 * A palavra-chave await faz o JavaScript esperar até que a promise retorne seu resultado.
 */

async function treatPromise() {
    try {
        const response = await promise;
        alert(response);
    } catch(error) {
        console.log(error);
    }
}

const Async = () => {
    treatPromise();

    return(
        <>
            <h1>Async</h1>
        </>
    );
}

export default Async;