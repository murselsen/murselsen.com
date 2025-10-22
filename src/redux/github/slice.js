import {createSlice} from "@reduxjs/toolkit";
// Thunks
import {fetchGistById, fetchProfileGithub, fetchRepos} from "./thunk.js";

const initialState = {
    username: "murselsen",
    profile: null,
    gists: [],
    repos: []
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
            .addCase(fetchRepos.fulfilled, (state, action) => {
                state.repos = action.payload;
            })

    }
})


export default githubSlice.reducer;
