import React from "react";
import {
  Clock,
  UserRoundPen,
  Phone,
  AtSign,
  GraduationCap,
  MapPin,
} from "lucide-react";
import IconBox from "../../../../../components/jobs/details/sidebar/IconBox";

const Sidebar = () => {
  return (
    <article
      className="bg-white p-4 rounded-lg h-max"
      style={{
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h3 className="text-lg font-semibold text-dark-1 mb-4">Profile Info</h3>
      <section className="flex flex-col gap-2">
        <IconBox Icon={Clock} title="Experience" description="6 years" />
        <IconBox Icon={UserRoundPen} title="Gender" description="male" />
        <IconBox Icon={Phone} title="Mobile" description="+99999999999" />
        <IconBox Icon={AtSign} title="Email" description="test@gmail.com" />
        <IconBox Icon={GraduationCap} title="Qualification" description="MSc" />
        <IconBox Icon={MapPin} title="Location" description="New York, USA" />
      </section>
    </article>
  );
};

export default Sidebar;
