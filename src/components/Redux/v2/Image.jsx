import { useSelector } from "react-redux";
import { selectId } from "./slice/id";

const Image = () => {
    // O useSelector é um hook que vai pegar o estado do Redux e retornar o valor atualizado.
    const id = useSelector(selectId);

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