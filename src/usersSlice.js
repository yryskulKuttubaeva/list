import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create async action
export const loadUsers = createAsyncThunk(
  "users/load", // action name
  async (arg, thunkAPI) => {
    // action function
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

export const addUser = createAsyncThunk(
  "users/add", // action name
  async (name, thunkAPI) => {
    // action function
    const response = await axios.post(
      "https://redux-a20e8-default-rtdb.firebaseio.com/users.json",
      {
        name: name
      }
    );

    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: []
  },
  reducers: {},
  extraReducers: {
    // Process async action result
    [loadUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [addUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    }
  }
});

export default usersSlice.reducer;
