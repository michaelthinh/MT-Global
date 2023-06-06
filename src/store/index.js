import { configureStore } from "@reduxjs/toolkit";

import darkSlice from "./dark/darkSlice.js";
import countriesSlice from "./countries/countriesSlice.js";

const store = configureStore({
    reducer: {
        dark: darkSlice.reducer,
        countries: countriesSlice.reducer,
    },
});

export default store;
