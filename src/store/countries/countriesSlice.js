import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        selectedCountry: null,
    },
    reducers: {
        updateCountries(state, action) {
            state.countries = action.payload.countries;
        },
        setCountryByName(state, action) {
            state.selectedCountry = action.payload.country;
        },
    },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
