import MainScreen from "./MainScreen";
import { store } from "./store/store"
import { Provider } from "react-redux";

/**
 * O React Redux fornece uma maneira de conectar o estado do Redux ao React,
 * assim dispensando a necessidade de passar o estado como props para todos
 * os componentes.
 * 
 * @returns 
 */

const Index = () => {
    return(
        <>
            <Provider store={store}> {/* O Provider é o componente que vai fornecer o estado para os componentes filhos */}
                <MainScreen />
            </Provider>
        </>
    );
}

export default Index;