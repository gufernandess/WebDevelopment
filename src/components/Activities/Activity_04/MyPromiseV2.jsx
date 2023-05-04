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

async function treatPromise() {
    try {
        const response = await promise;
        alert(response);
    } catch(error) {
        console.log(error);
    }
}

const MyPromiseV2 = () => {
    treatPromise();

    return (
        <>
            <h1>Async</h1>
        </>
    );
}

export default MyPromiseV2;