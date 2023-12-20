import { FaEdit, FaTrash } from "react-icons/fa";

export const columnsDataDevelopment = [
  {
    Header: "Product Name",
    accessor: "productname",
  },
  {
    Header: "Thumbnail",
    accessor: "thumbnail",
    Cell: ({ value }) => (
      <img src={value} alt="Thumbnail" width="80" height="80" />
    ),
  },
  {
    Header: "Images",
    accessor: "images",
    Cell: ({ value }) => (
      <div className="flex items-center gap-2">
        {value.map((item) => (
          <img src={item} alt="Image" width="80" height="80" />
        ))}
      </div>
    ),
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => (
      <div>
        <button
          type="button"
          class="focus:outline-none text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <FaEdit></FaEdit>
        </button>
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          <FaTrash></FaTrash>
        </button>
      </div>
    ),
  },
];
console.log(columnsDataDevelopment);
export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "ACTION",
    accessor: "action",
    Cell: ({ row }) => <div></div>,
  },
];

export const columnsDataColumns = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];

export const columnsDataComplex = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
];
