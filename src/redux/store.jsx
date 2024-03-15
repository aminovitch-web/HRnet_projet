import { configureStore, createSlice } from "@reduxjs/toolkit";
import { department } from "../mockData/mockDepartment";
import { employees } from "../mockData/mockEmployee";
import { states } from "../mockData/mockState";

const employeeDataSlice = createSlice({
  name: "employeeData",
  initialState: employees,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

const appDataSlice = createSlice({
  name: "appData",
  initialState: { states, department },
  reducers: {},
});

export const selectEmployeeData = (state) => state.employeeData;

export const store = configureStore({
  reducer: {
    employeeData: employeeDataSlice.reducer,
    appData: appDataSlice.reducer,
  },
});
