import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counters: []
};

const stateCounter = createSlice({
    name: "count",
    initialState,
    reducers: {
        incremant: (state, action) => {
           
            state.counters.push(action.payload);
        },
        discremant: (state, action) => {
            const { id, value } = action.payload;
            const index = state.findIndex(counter => counter.id == id);
            if (index != -1) {
                state.counters[index].value = value;
            }
        },
        // update: (state, action) => {
        //     const counter = state.find(counter => counter.id == action.payload.id);
        //     if (counter) counter.value = 0;
        // }
    }
})

export default stateCounter.reducer;
export const { incremant,discremant} = stateCounter.actions;
