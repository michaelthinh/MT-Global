import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
    },
    reducers: {
        updateCountries(state, action) {
            state.countries = action.payload.countries;
        },
    },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
