import { createSlice } from "@reduxjs/toolkit"



const initalState = {
    bagData: [],
}

const BigBag = createSlice({
    name: "bigBag",
    initialState: initalState,
    reducers: {
        AddIn: (state, action) => {
            state.bagData.push(action.payload)
        },
        UpdateBag: (state, action) => {
            const { id, each, TotalPrice, counter } = action.payload;
            const userIndex = state.bagData.findIndex(data => data.id == id);
            if (userIndex !== -1) {
                state.bagData[userIndex].each = each;
                state.bagData[userIndex].TotalPrice = TotalPrice;
                state.bagData[userIndex].counter = counter;
            }
        },
        RemoveBag: (state, action) => {
            const id = action.payload.id;
            state.bagData=state.bagData.filter(user=>user.id !==id)
        }
    }
});
export default BigBag.reducer;
export const { AddIn,UpdateBag,RemoveBag } = BigBag.actions;