import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "VideoSlice",
    initialState: {
        videos: null
    },
    reducers: {
        ShowVideos: (state, action) => {
            state.videos = action.payload
        }
    }
})

export const { ShowVideos } = VideoSlice.actions
export default VideoSlice.reducer