import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light'
}

const ThemeModeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        lightMode: (state) => {
            state.mode = 'light'
        },
        darkMode: (state) => {
            state.mode = 'dark'
        }
    }
})

export const { lightMode, darkMode } = ThemeModeSlice.actions

export default ThemeModeSlice.reducer