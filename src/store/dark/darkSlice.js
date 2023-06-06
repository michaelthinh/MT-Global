import { createSlice } from "@reduxjs/toolkit";

const bodyElement = document.getElementsByTagName("BODY")[0];

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
                bodyElement.style.backgroundColor = "#253529";
            } else {
                bodyElement.style.backgroundColor = "#FFF";
                state.theme = "lightTheme";
            }
        },
    },
});

export const darkActions = darkSlice.actions;

export default darkSlice;
