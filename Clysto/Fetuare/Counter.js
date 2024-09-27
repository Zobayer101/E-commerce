import { createSlice } from "@reduxjs/toolkit"


const initialState = [];

const stateCounter = createSlice({
    name: "count",
    initialState,
    reducers: {
        incremant: (state, action) => {
            const newData = {id: action.payload.id,value:action.payload.value}
            state.push(newData);
        },
        discremant: (state, action) => {
            const index = state.findIndex(counter => counter.id == action.payload.id);
            if (index != -1) state.splice(index, 1);
        },
        update: (state, action) => {
            const counter = state.find(counter => counter.id == action.payload.id);
            if (counter) counter.value = 0;
        }
    }
})

export default stateCounter.reducer;
export const { incremant,discremant,update} = stateCounter.actions;
