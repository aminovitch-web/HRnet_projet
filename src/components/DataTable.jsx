import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { RingLoader } from "react-spinners";
import "../App.css";
import useStore, { selectEmployeeData, selectSearch } from "../zustand/store";

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
  const data = useStore(selectEmployeeData);
  const search = useStore(selectSearch);
  const setSearch = useStore((state) => state.updateSearch);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((row) => {
    const {
      firstName,
      lastName,
      startDate,
      dateOfBirth,
      department,
      street,
      city,
      state,
      zipCode,
    } = row;
    const searchTerm = search.toLowerCase();
    return (
      firstName.toLowerCase().includes(searchTerm) ||
      lastName.toLowerCase().includes(searchTerm) ||
      startDate.includes(searchTerm) ||
      dateOfBirth.includes(searchTerm) ||
      department.toLowerCase().includes(searchTerm) ||
      street.toLowerCase().includes(searchTerm) ||
      city.toLowerCase().includes(searchTerm) ||
      state.toLowerCase().includes(searchTerm) ||
      zipCode.includes(searchTerm)
    );
  });

  return (
    <div className="dataTableComponent">
      {isLoading ? (
        <div className="loaderContainer">
          <RingLoader color="#53a8b6" loading={isLoading} />
        </div>
      ) : (
        <>
          <div className="searchBoxContainer">
            <input
              type="text"
              name="searchBox"
              id="searchBox"
              placeholder="Name, Adress, Department ..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <DataTable columns={columns} data={filteredData} pagination />
        </>
      )}
    </div>
  );
}
