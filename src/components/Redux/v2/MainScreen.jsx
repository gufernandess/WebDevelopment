import DecrementButton from "./DecrementButton";
import Image from "./Image";
import IncrementButton from "./IncrementButton";

const MainScreen = () => {
    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Image />
                        </td>
                        <tr>
                            <td>
                                <IncrementButton />
                            </td>
                            <td>
                                <DecrementButton />
                            </td>
                        </tr>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default MainScreen;