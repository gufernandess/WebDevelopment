const Calculator = () => {

    const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
    const sub = (firstNumber, secondNumber) => firstNumber - secondNumber;
    const mult = (firstNumber, secondNumber) => firstNumber * secondNumber;
    const div = (firstNumber, secondNumber) => firstNumber / secondNumber; 

    return (
        <>
        <h1>A soma dos números é: {sum(10, 5)}</h1>
        <h1>A subtração dos números é: {sub(10, 5)}</h1>
        <h1>A multiplicação dos números é: {mult(10, 5)}</h1>
        <h1>A divisão dos números é: {div(10, 5)}</h1>
        </>
    );
}

export default Calculator;