import { createSlice } from "@reduxjs/toolkit";

const bodyElement = document.getElementsByTagName("BODY")[0];

const darkSlice = createSlice({
    name: "dark",
    initialState: {
        isDark: false,
    },
    reducers: {
        toggleDark(state, action) {
            state.isDark = !state.isDark;
            if (state.isDark) {
                bodyElement.style.backgroundColor = "#000";
            } else {
                bodyElement.style.backgroundColor = "#FFF";
            }
        },
    },
});

export const darkActions = darkSlice.actions;

export default darkSlice;
