import { createSlice } from "@reduxjs/toolkit";

const bodyElement = document.getElementsByTagName("BODY")[0];

const darkSlice = createSlice({
    name: "dark",
    initialState: {
        isDark: false,
    },
    reducers: {
        toggleDark(state) {
            state.isDark = !state.isDark;
            if (state.isDark) {
                bodyElement.style.backgroundColor = "#222";
                bodyElement.style.color = "#FFF";
            } else {
                bodyElement.style.backgroundColor = "#FFF";
                bodyElement.style.color = "#000";
            }
        },
    },
});

export const darkActions = darkSlice.actions;

export default darkSlice;
