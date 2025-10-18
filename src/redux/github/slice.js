import {createSlice} from "@reduxjs/toolkit";
// Thunks
import {fetchGistById, fetchProfileGithub} from "./thunk.js";

const initialState = {
    username: "murselsen",
    profile: null,
    gists: []
};

const githubSlice = createSlice({
    name: 'github',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProfileGithub.fulfilled, (state, action) => {
            state.profile = action.payload;
        })
            .addCase(fetchGistById.fulfilled, (state, action) => {
                const gistList = [];
                gistList.push(action.payload);
                state.gists = gistList;
            })

    }
})


export default githubSlice.reducer;
