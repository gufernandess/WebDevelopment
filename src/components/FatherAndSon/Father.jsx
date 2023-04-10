import Son from "./Son";

const Father = () => {
    const receiveMessage = (message) => {
        alert(message);
    }

    return(
        <>
            <h1>Father</h1>
            <Son money={600.00} sendMessage={receiveMessage} />
        </>
    );
}

export default Father;