import React from "react";
import Table from "../../../ui/table/Table";
import THead from "../../../ui/table/THead";
import TBody from "../../../ui/table/TBody";
import TableRow from "./TableRow";

const AllCandidates = () => {
  return (
    <div className="mt-4">
      <div className="overflow-x-auto border border-solid rounded-lg hideScrollbar">
        <Table>
          <THead>
            <th className="min-w-[240px]">Name</th>
            <th className="w-[200px]">Applied For</th>
            <th className="w-[110px]">Applied On</th>
            <th className="w-[150px]">Status</th>
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

export default AllCandidates;
