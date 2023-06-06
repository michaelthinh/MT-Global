import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name: "dark",
    initialState: {
        isDark: false,
        theme: "lightTheme",
    },
    reducers: {
        toggleDark(state) {
            state.isDark = !state.isDark;
            if (state.theme === "lightTheme") {
                state.theme = "darkTheme";
            } else {
                state.theme = "lightTheme";
            }
        },
    },
});

export const darkActions = darkSlice.actions;

export default darkSlice;
