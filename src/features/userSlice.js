import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    }
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer