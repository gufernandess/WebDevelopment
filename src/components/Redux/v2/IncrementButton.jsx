import { useDispatch } from "react-redux";
import { increment } from "./slice/id";

const IncrementButton = () => {
    const dispatch = useDispatch();

    return(
        <>
            <button onClick={() => dispatch(increment())}>ID + 1</button>
        </>
    );
}

export default IncrementButton;