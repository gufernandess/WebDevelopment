/**
 * O contexto dentro do react é uma forma de compartilhar dados entre componentes
 * sem a necessidade de passar props.
 * 
 * Para criar um contexto, basta importar o createContext do react e criar uma constante
 *  */

import { createContext } from "react";

const Color = createContext();

export default Color;