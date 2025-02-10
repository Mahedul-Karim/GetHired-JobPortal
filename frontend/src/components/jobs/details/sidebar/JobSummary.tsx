import React, { useState } from "react";
import IconBox from "./IconBox";
import {
  CalendarDays,
  MapPin,
  UserRound,
  Clock,
  Briefcase,
  UserRoundSearch,
} from "lucide-react";
import Button from "../../../ui/button/Button";
import JobApplyModal from "../../../ui/modals/JobApplyModal";
const JobSummary = () => {

  const [open,setOpen] = useState(false);

  return (
    <article
      className="bg-white p-4 mt-8 rounded-lg"
      style={{
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h3 className="text-lg font-semibold text-dark-1 mb-4">
        Job Information
      </h3>
      <section className="flex flex-col gap-2">
        <IconBox
          Icon={CalendarDays}
          title="Date Posted"
          description="April 22, 2024"
        />
        <IconBox
          Icon={MapPin}
          title="Location"
          description="Munchen, Germany"
        />
        <IconBox
          Icon={UserRound}
          title="Job Title"
          description="Web Developer"
        />
        <IconBox Icon={Clock} title="Experience" description="3 year" />
        <IconBox
          Icon={Briefcase}
          title="Qualification"
          description="Bachelor Degree"
        />
        <IconBox Icon={UserRoundSearch} title="Gender" description="Both" />
        <Button className="my-4" onClick={()=>setOpen(true)}>
          Apply Now
        </Button>
      </section>
      <JobApplyModal open={open} setOpen={setOpen}/>
    </article>
  );
};

export default JobSummary;
