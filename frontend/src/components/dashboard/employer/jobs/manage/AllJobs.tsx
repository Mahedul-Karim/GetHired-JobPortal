import React from "react";
import Table from "../../../../ui/table/Table";
import THead from "../../../../ui/table/THead";
import TBody from "../../../../ui/table/TBody";
import TableRow from "./TableRow";

const AllJobs = () => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto border border-solid rounded-lg hideScrollbar">
        <Table>
          <THead>
            <th className="w-[200px]">Job Title</th>
            <th>Category</th>
            <th>Job Type</th>
            <th>Applicants</th>
            <th>Created At</th>
            <th>Status</th>
            <th></th>
          </THead>
          <TBody>
            <TableRow />
            <TableRow setAbove/>
            <TableRow setAbove/>
          </TBody>
        </Table>
      </div>
    </div>
  );
};

export default AllJobs;
