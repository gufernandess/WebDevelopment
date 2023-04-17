const SecondSon = ({vector, calculate}) => {
    return(
        <>
            <button onClick={() => {calculate(Math.min(...vector))}}>Smallest element</button>
        </>
    );
}

export default SecondSon;