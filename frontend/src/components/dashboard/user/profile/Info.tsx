import React from "react";
import Input from "../../../ui/form/Input";

import {
  UserRound,
  Phone,
  AtSign,
  Globe,
  GraduationCap,
  Languages,
  Calendar,
  Earth,
  Building2,
  Milestone,
  MapPin,
  ListCollapse,
} from "lucide-react";
import TextArea from "../../../ui/form/TextArea";
import Button from "../../../ui/button/Button";
import Checkbox from "../../../ui/check/Checkbox";
import ProfileUpload from "../../common/ProfileUpload";

const Info = () => {
  return (
    <div className="mt-4">
      <form action="" className="space-y-8">
        <ProfileUpload />
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Your Name" Icon={UserRound} />
          <Input placeholder="Your Phone Number" Icon={Phone} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Email Address" Icon={AtSign} />
          <Input placeholder="Portfolio Website" Icon={Globe} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Qualification" Icon={GraduationCap} />
          <Input placeholder="Known Languages" Icon={Languages} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Age" Icon={Calendar} />
          <Input placeholder="Country" Icon={Earth} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="City" Icon={Building2} />
          <Input placeholder="Post Code" Icon={Milestone} />
        </div>
        <div>
          <label className="font-medium mb-1 inline-block text-dark-2">
            Gender:
          </label>
          <div className="flex items-center gap-4">
            <Checkbox name="gender" checkId="male" value="male" label="Male" />
            <Checkbox
              name="gender"
              checkId="female"
              value="female"
              label="Female"
            />
          </div>
        </div>
        <Input placeholder="Date of birth" type="date" Icon={Calendar} />
        <Input placeholder="Full Address" Icon={MapPin} />
        <TextArea placeholder="Your Bio" Icon={ListCollapse} />
        <Button>Save Changes</Button>
      </form>
    </div>
  );
};

export default Info;
