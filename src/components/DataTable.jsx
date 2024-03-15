import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import "../App.css";
import { selectEmployeeData } from "../redux/store";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

export default function DataTableComponent() {
  const data = useSelector(selectEmployeeData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="dataTableComponent">
      {isLoading ? (
        <div className="loaderContainer">
          <RingLoader color="#53a8b6" loading={isLoading} />
        </div>
      ) : (
        <DataTable columns={columns} data={data} pagination />
      )}
    </div>
  );
}
