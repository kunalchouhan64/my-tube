import { configureStore } from "@reduxjs/toolkit";
import ToggleMenu from "../Components/Slices/ToggleMenu";
import VideosSlice from "../Components/Slices/VideosSlice";

const store = configureStore({
    reducer: {
        togglemenu: ToggleMenu,
        videos : VideosSlice
    }
})

export default store