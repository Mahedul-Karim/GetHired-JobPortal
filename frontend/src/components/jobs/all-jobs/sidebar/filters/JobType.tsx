import React from "react";
import Heading from "../Heading";
import Checkbox from "../../../../ui/check/Checkbox";
import { JOB_TYPES } from "../../../../../util/data";

interface Props {
  setType: (val: string) => void;
}

const JobType: React.FC<Props> = ({ setType }) => {
  return (
    <div>
      <Heading>JobType</Heading>
      <div className="my-3 space-y-2">
        {JOB_TYPES.map((type, i) => (
          <Checkbox
            name="job-type"
            checkId={`type-${i}`}
            key={i}
            value={type.value}
            label={type.label}
            onChange={(e) => setType(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobType;
