import React from "react";
import Input from "../../../../ui/form/Input";
import Button from "../../../../ui/button/Button";
import {
  IdCard,
  SquareStack,
  FileText,
  DollarSign,
  UserRoundPen,
  GraduationCap,
  MapPin,
  ListCollapse,
  Calendar,
  ScrollText,
  Plus,
  X,
  ClipboardList,
} from "lucide-react";
import Select from "./Select";
import Checkbox from "../../../../ui/check/Checkbox";
import TextArea from "../../../../ui/form/TextArea";

const JobForm = () => {
  return (
    <div className="mt-4">
      <form action="" className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Frontend Developer"
            label="Job Title"
            Icon={IdCard}
          />
          <Select
            Icon={SquareStack}
            label="Job Category"
            defaultValue="Select a category"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Select
            Icon={FileText}
            label="Job Type"
            defaultValue="Select a type"
          />
          <Input
            placeholder="Salary"
            type="number"
            label="Offered Salary"
            Icon={DollarSign}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="E.g. Minimum 3 years"
            label="Experience"
            Icon={UserRoundPen}
          />
          <Input
            placeholder="E.g. BSc in Software Engineering"
            label="Qualification"
            Icon={GraduationCap}
          />
        </div>
        <div>
          <label className="font-medium text-sm mb-1 inline-block text-dark-2">
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
            <Checkbox name="gender" checkId="both" value="both" label="Both" />
          </div>
        </div>
        <Input placeholder="Location" label="Job Location" Icon={MapPin} />
        <TextArea
          placeholder="Description"
          label="Job Description"
          Icon={ListCollapse}
        />

        <div>
          <Input
            placeholder="Job Requirements"
            label="Requirements"
            Icon={ScrollText}
          />
          <div className="flex justify-end my-4">
            <Button
              variant="outline"
              style={{ padding: 0 }}
              className="!size-[30px] xs:!size-[35px]"
            >
              <Plus className="size-5 xs:size-6" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between mt-4 text-dark-2">
              <p className="flex gap-2 font-medium text-sm">
                <span>1.</span> This is requirement 1
              </p>
              <button type="button">
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Input
            placeholder="Job Responsibilities"
            label="Responsibilites"
            Icon={ClipboardList}
          />
          <div className="flex justify-end my-4">
            <Button
              variant="outline"
              style={{ padding: 0 }}
              className="!size-[30px] xs:!size-[35px]"
            >
              <Plus className="size-5 xs:size-6" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between mt-4 text-dark-2">
              <p className="flex gap-2 font-medium text-sm">
                <span className="shrink-0">1.</span> This is requirement Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Ut
                necessitatibus, veniam minima ducimus quos error delectus
                provident laboriosam dolore dolorum.
              </p>
              <button type="button">
                <X className="size-5" />
              </button>
            </div>
          </div>
        </div>
        <Input
          placeholder="Application deadline"
          type="date"
          label="Deadline"
          Icon={Calendar}
        />
        <Button>Save Changes</Button>
      </form>
    </div>
  );
};

export default JobForm;
