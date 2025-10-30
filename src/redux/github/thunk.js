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

                return response.data;
            }
        } catch (error) {
            console.log("Error:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchGistById = createAsyncThunk(
    "github/fetchGistById", async (id, thunkAPI) => {
        try {
            const response = await axios.get(API_URL + "/gists/" + id);
            if (response.status === 200) {

                return response.data;
            }
        } catch (e) {
            console.log("Error:",e);
            thunkAPI.rejectWithValue(e.message);
        }
    }
)


export const fetchRepos = createAsyncThunk(
    "github/fetchRepos", async (_, thunkAPI) => {
        try {
            const {username} = thunkAPI.getState()['github'];
            const response = await axios.get(API_URL + "/users/" + username + "/repos?per_page=100");

            if (response.status === 200) {

                let data =
                    response.data.slice().sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

                return data;
            }
        } catch (e) {
            console.log("Error:",e);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)