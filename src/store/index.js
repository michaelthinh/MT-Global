import { configureStore } from "@reduxjs/toolkit";

import darkSlice from "./darkSlice.js";

const store = configureStore({
    reducer: {
        dark: darkSlice.reducer,
    },
});

export default store;
