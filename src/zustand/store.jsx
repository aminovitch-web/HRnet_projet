import { create } from "zustand";
import { department } from "../mockData/mockDepartment";
import { employees } from "../mockData/mockEmployee";
import { states } from "../mockData/mockState";

const useStore = create((set) => ({
  employeeData: employees,
  appData: { states, department },
  search: "",
  updateSearch: (newSearch) => set({ search: newSearch.toLowerCase() }),
}));

export const selectSearch = (state) => state.search;
export const selectEmployeeData = (state) => state.employeeData;

export default useStore;
