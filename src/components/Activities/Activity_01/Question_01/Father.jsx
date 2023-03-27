import Son from './Son';

const Father = ({height, weight}) => {
    return(
        <>
            <Son height={height} weight={weight} />
        </>
    );
}

export default Father;