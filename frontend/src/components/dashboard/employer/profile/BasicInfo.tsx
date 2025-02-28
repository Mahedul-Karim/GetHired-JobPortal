import React from "react";
import Input from "../../../ui/form/Input";
import {
  AtSign,
  Phone,
  UserRound,
  Globe,
  Clock3,
  Notebook,
} from "lucide-react";
import TextArea from "../../../ui/form/TextArea";
import Button from "../../../ui/button/Button";

const BasicInfo = () => {
  return (
    <div className="mt-4">
      <form action="" className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Company Name" Icon={UserRound} />
          <Input placeholder="Company Phone Number" Icon={Phone} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Company Email" Icon={AtSign} />
          <Input placeholder="Company Website" Icon={Globe} />
        </div>
        <Input placeholder="Established Since" type="number" Icon={Clock3} />
        <TextArea placeholder="Description" Icon={Notebook} />
        <Button>Save Changes</Button>
      </form>
    </div>
  );
};

export default BasicInfo;
