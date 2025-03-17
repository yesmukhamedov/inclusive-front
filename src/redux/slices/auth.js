import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const login = createAsyncThunk(
  "/login",
  async (params) => (await axios.post("/login", params)).data
);

export const register = createAsyncThunk(
  "/register",
  async (params) => (await axios.post("/register", params)).data
);

export const authMe = createAsyncThunk(
  "/authMe",
  async () => (await axios.get("/auth/me")).data
);

export const setTheme = createAsyncThunk(
  "/authMe",
  async (params) => (await axios.post("/set-theme", params)).data
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "loading",
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    // Login
    [login.pending]: (state) => {
      state.status = "loading";
      state.user = null;
    },
    [login.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.user = action.payload.user;
    },
    [login.rejected]: (state) => {
      state.status = "error";
      state.user = null;
    },
    // Register
    [register.pending]: (state) => {
      state.status = "loading";
      state.user = null;
    },
    [register.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.user = action.payload.user;
    },
    [register.rejected]: (state) => {
      state.status = "error";
      state.user = null;
    },
    // Get me
    [authMe.pending]: (state) => {
      state.status = "loading";
      state.user = null;
    },
    [authMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.user = action.payload.user;
    },
    [authMe.rejected]: (state, action) => {
      state.status = "error";
      state.user = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
