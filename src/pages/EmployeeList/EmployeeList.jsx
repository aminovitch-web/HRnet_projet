import DataTableComponent from "../../components/DataTable";

export default function EmployeeList() {
  return (
    <main className="indexMain">
      <h1>Current Employee</h1>
      <section className="dataTableContainer">
        <DataTableComponent />
      </section>
    </main>
  );
}
