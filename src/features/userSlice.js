import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create action
export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue}) => {
  const response = axios.get(
    "https://648d9c852de8d0ea11e809de.mockapi.io/crud"
  );
  try {
    const result = await response.data
    return result;
  } catch (error) {
    return rejectWithValue(`"Something went wrong!", ${error}`)
  }
});

export const userSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
