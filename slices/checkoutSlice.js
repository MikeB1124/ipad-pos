import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    items: [],
    status: null,
    tax: null,
    total: null
}

export const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setTax: (state, action) => {
            state.tax = action.payload
        },
        setTotal: (state, action) => {
            state.total = action.payload
        }
    }
})

export const { setItems, setStatus, setTax, setTotal} = checkoutSlice.actions


export const selectItems = (state) => state.checkout.items
export const selectStatus = (state) => state.checkout.status
export const selectTax = (state) => state.checkout.tax
export const selectTotal = (state) => state.checkout.total


export default checkoutSlice.reducer