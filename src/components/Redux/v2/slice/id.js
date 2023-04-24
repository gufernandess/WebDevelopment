import { createSlice } from "@reduxjs/toolkit";

/**
 * O createSlice é um método que cria um slice de estado e ações para atualizar esse estado.
 * O createSlice retorna um nome de slice, um estado inicial, um objeto de ações e um reducer.
 * 
 * Um slice de estado é um pedaço do estado da aplicação.
 * 
 * Os reducers são funções que recebem o estado atual e uma ação e retornam um novo estado,
 * equivalentes ao useState.
 * 
 * O initialState é o estado inicial do slice.
 * 
 */

export const id = createSlice({
    name: "id",
    initialState: {
        value: 10,
    },
    reducers: {
        increment: (state) => {state.value += 1;},
        decrement: (state) => {state.value -= 1;},
    }
});


export const { increment, decrement } = id.actions;
export const selectId = (state) => state.id.value;
export default id.reducer;
