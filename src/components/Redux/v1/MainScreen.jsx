import { useState } from "react";
import DecrementButton from "./DecrementButton";
import Image from "./Image";
import IncrementButton from "./IncrementButton";

const MainScreen = () => {
    const [id, setId] = useState(1);

    const increment = () => setId(prev => prev + 1);

    const decrement = () => setId(prev => prev - 1);

    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Image id={id} />
                        </td>
                        <tr>
                            <td>
                                <IncrementButton increment = {increment} />
                            </td>
                            <td>
                                <DecrementButton decrement = {decrement} />
                            </td>
                        </tr>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default MainScreen;