import {configureStore} from '@reduxjs/toolkit'
import githubReducer from "./github/slice.js";

const store = configureStore(
    {
        reducer: {
            github: githubReducer
        }
    }
);

export default store;