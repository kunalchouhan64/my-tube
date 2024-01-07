import { createSlice } from "@reduxjs/toolkit";

const togglemenu = createSlice({
    name: "togglemenu",
    initialState: {
        togglemenu: true
    },
    reducers: {
        HideShowMenu: (state) => {
            state.togglemenu = !state.togglemenu
        }
    }
})

export const { HideShowMenu } = togglemenu.actions
export default togglemenu.reducer