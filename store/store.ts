import { configureStore } from "@reduxjs/toolkit";
import showProfile from "./sohw-profile";
const store = configureStore({

    reducer:{
        showProfile:showProfile.reducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type Appstate = ReturnType<typeof store.getState>
export default store;

