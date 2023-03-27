const Son = ({height, weight}) => {
    let result = weight / (height * height).toFixed(2);

    const IMC = () => {

        if(result < 18) {
            return "Abaixo do peso";
        } if(result > 25) {
            return "Acima do peso";
        } else {
            return "Peso ideal";
        }
    }

    return(
        <>
            <h3>{IMC()}</h3>
        </>
    );
}

export default Son;