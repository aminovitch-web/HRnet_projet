import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DataTableComponent from "../../components/DataTable";

export default function EmployeeList() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch({
        type: "userInteraction/updatePageLocation",
        payload: {
          page: "index",
          pageTitle: "HRnet - Current Employees",
        },
      });
    } catch (error) {
      console.error("Error updating page location:", error);
    }
  }, [dispatch]);

  return (
    <main className="indexMain">
      <h1>Current Employee</h1>
      <section className="dataTableContainer">
        <DataTableComponent />
      </section>
    </main>
  );
}
