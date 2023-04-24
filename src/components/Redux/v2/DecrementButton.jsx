import { useDispatch } from "react-redux";
import { decrement } from "./slice/id";

/**
 * O useDispatch é um hook que vai retornar o dispatch do Redux.
 * O dispatch é uma função que vai enviar uma action para o reducer.
 * A action é um objeto que vai conter o type e o payload.
 * 
 * @returns
 */

const DecrementButton = () => {
    const dispatch = useDispatch();

    return(
        <>
            <button onClick={() => dispatch(decrement())}>ID - 1</button>
        </>
    );
}

export default DecrementButton;