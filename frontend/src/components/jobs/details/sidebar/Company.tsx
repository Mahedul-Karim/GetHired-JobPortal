import React from "react";
import { Building, Smartphone, Mail, Globe, MapPin } from "lucide-react";
import IconBox from "./IconBox";

const Company = () => {
  return (
    <figure className="bg-white rounded-lg p-4" style={{
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
      }}>
      <div
        className="bg-white size-16 rounded-full grid place-items-center"
        style={{
          boxShadow: "0px 0px 10px var(--primary-light)",
        }}
      >
        <img
          src="https://thewebmax.org/jobzilla/images/home-6/featured-jobs/instagram.png"
          alt=""
          className="size-10 object-cover"
        />
      </div>
      <h3 className="text-dark-2 my-4 text-xl font-semibold">Instagram, USA</h3>
      <section className="flex flex-col gap-2">
        <IconBox
          Icon={Building}
          title="Company"
          description="Software Development"
        />
        <IconBox Icon={Smartphone} title="Phone" description="+12345678" />
        <IconBox Icon={Mail} title="Email" description="instagram@gmail.com" />
        <IconBox Icon={Globe} title="Website" description="www.google.com" />
        <IconBox
          Icon={MapPin}
          title="Address"
          description="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
        />
      </section>
    </figure>
  );
};

export default Company;
