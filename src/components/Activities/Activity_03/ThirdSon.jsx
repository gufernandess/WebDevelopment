const ThirdSon = ({vector, calculate}) => {
    return(
        <>
            <button onClick={() => {calculate(vector.reduce((acc, value) => acc + value, 0) / vector.length)}}>Media</button>
        </>
    );
}

export default ThirdSon;