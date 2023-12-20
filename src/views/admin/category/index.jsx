import React from "react";
import CheckTable from "../default/components/CheckTable";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "../default/variables/columnsData";
import tableDataCheck from "../default/variables/tableDataCheck.json";
import { FaUpload } from "react-icons/fa";

const CategoryOverview = () => {
  return (
    <div className="mt-3 h-full ">
      <div>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>
    </div>
  );
};

export default CategoryOverview;
