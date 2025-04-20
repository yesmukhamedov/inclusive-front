import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const setTheme = createAsyncThunk(
  "/students/setTheme/",
  async (params) => (await axios.post(`/students/set-theme/${params._id}`, params)).data
);

// export const setTheme = param => console.log(param);

export const getStudents = createAsyncThunk(
  "/students/list",
  async () => (await axios.get("/students/list")).data
);

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: null,
    status: "loading",
  },
  reducers: {},
  extraReducers: {
    // Students
    [getStudents.pending]: (state) => {
      state.status = "loading";
      state.students = null;
    },
    [getStudents.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.students = action.payload;
    },
    [getStudents.rejected]: (state) => {
      state.status = "error";
      state.students = null;
    },
  },
});

export const studentsReducer = studentsSlice.reducer;
