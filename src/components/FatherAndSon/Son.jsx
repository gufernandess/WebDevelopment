const Son = ({money, sendMessage}) => {
    return(
        <>
            <h1>Son</h1>
            <h3 className="">Money: {money}</h3>
            <button onClick={() => {sendMessage("It works!")}}>Button</button>
        </>
    );
}

export default Son;