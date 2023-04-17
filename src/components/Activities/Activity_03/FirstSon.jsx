const FirstSon = ({vector, calculate}) => {
    return(
        <>
            <button onClick={() => {calculate(Math.max(...vector))}}>Biggest element</button>
        </>
    );
}

export default FirstSon;