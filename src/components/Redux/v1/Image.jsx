const Image = ({id}) => {
    return(
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                alt="" 
                style={{width: "400px"}}
                />
        </>
    );
}

export default Image;