import { configureStore } from '@reduxjs/toolkit';
import id from '../slice/id';

/**
 * O configureStore é um método que cria um store Redux.
 * Um store Redux é um objeto que mantém o estado da aplicação.
 */

export const store = configureStore({
    reducer: {id: id}
});