import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.github.com";


export const fetchProfileGithub = createAsyncThunk(
    "github/fetchProfileGithub",
    async (_, thunkAPI) => {

        try {
            const {username} = thunkAPI.getState()['github'];
            const response = await axios.get(API_URL + `/users/${username}`);
            if (response.status === 200) {
                console.log("github/fetchProfileGithub - Response:", response);
                return response.data;
            }
        } catch (error) {
            console.log("Error:", error);
            return thunkAPI.rejectWithValue(error.message);
        } finally {
            console.log("Fetch Github Profile - Thunk")
        }
    }
);

export const fetchGistById = createAsyncThunk(
    "github/fetchGistById", async (id, thunkAPI) => {
        try {
            const response = await axios.get(API_URL + "/gists/" + id);
            if (response.status === 200) {
                console.log("github/fetchGistById - Response:", response);
                return response.data;
            }
        } catch (e) {
            console.log("github/fetchGistById - Error:", e);
            thunkAPI.rejectWithValue(e.message);
        }
    }
)