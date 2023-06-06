import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        selectedCountry: null,
        loading: true,
    },
    reducers: {
        updateCountries(state, action) {
            state.countries = action.payload.countries;
        },
        setCountryByName(state, action) {
            state.selectedCountry = action.payload.country;
        },
        setLoading(state, action) {
            state.loading = action.payload.value;
        },
    },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
