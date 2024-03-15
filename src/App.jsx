import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header/Header";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import EmployeeList from "./pages/EmployeeList/EmployeeList";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="*" element={<EmployeeList />} />
      </Routes>
    </>
  );
}
