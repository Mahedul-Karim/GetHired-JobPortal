import React, { useState } from "react";
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
  UsersRound,
} from "lucide-react";
import Select from "./Select";
import Checkbox from "../../../../ui/check/Checkbox";
import TextArea from "../../../../ui/form/TextArea";
import { useForm } from "react-hook-form";
import { CATEGORIES_DATA, JOB_TYPES } from "../../../../../util/data";
import { useRequest } from "../../../../../hooks/useRequest";
import { useAlert } from "../../../../../hooks/useAlert";

type JobFormType = {
  title: string;
  category: string;
  jobType: string;
  salary: number;
  experience: string;
  qualification: string;
  gender: string;
  jobLocation: string;
  vacancy: number;
  jobDescription: string;
  deadline: Date;
  requirements: Array<string>;
  responsibilities: Array<string>;
};

const JobForm = ({ token }: { token: string }) => {
  const { register, handleSubmit, setValue, reset } = useForm<JobFormType>();

  const [requirementText, setRequirementText] = useState("");
  const [requirements, setRequirements] = useState([]);

  const [responsibilitiesText, setResponsibilitiesText] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);

  const { success: onSuccess, error: onError } = useAlert();

  const { mutate, isPending } = useRequest({
    success(data: any) {
      onSuccess(data.message);
      reset();
      setRequirements([]);
      setResponsibilities([]);
    },
    error(message) {
      onError(message);
    },
  });

  const onRequirement = () => {
    const allRequirements: any = [...requirements];

    allRequirements.push(requirementText);

    setRequirements(allRequirements);
    setRequirementText("");
    setValue("requirements", allRequirements);
  };

  const onSubmit = (values: JobFormType) => {
    const formData = { ...values };

    formData.deadline = new Date(values.deadline);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    };

    mutate({ endpoint: "job", options });
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Frontend Developer"
            label="Job Title"
            Icon={IdCard}
            disabled={isPending}
            {...register("title")}
          />

          <Select
            Icon={SquareStack}
            label="Job Category"
            defaultValue="Select a category"
            options={CATEGORIES_DATA}
            disabled={isPending}
            {...register("category")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Select
            Icon={FileText}
            label="Job Type"
            defaultValue="Select a type"
            options={JOB_TYPES}
            disabled={isPending}
            {...register("jobType")}
          />
          <Input
            placeholder="Salary"
            type="number"
            label="Offered Salary"
            Icon={DollarSign}
            disabled={isPending}
            {...register("salary")}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="E.g. Minimum 3 years"
            label="Experience"
            Icon={UserRoundPen}
            disabled={isPending}
            {...register("experience")}
          />
          <Input
            placeholder="E.g. BSc in Software Engineering"
            label="Qualification"
            Icon={GraduationCap}
            disabled={isPending}
            {...register("qualification")}
          />
        </div>
        <div>
          <label className="font-medium text-sm mb-1 inline-block text-dark-2">
            Gender:
          </label>
          <div className="flex items-center gap-4">
            <Checkbox
              {...register("gender")}
              checkId="male"
              value="male"
              label="Male"
            />
            <Checkbox
              {...register("gender")}
              checkId="female"
              value="female"
              label="Female"
            />
            <Checkbox
              {...register("gender")}
              checkId="both"
              value="both"
              label="Both"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Location"
            label="Job Location"
            Icon={MapPin}
            disabled={isPending}
            {...register("jobLocation")}
          />
          <Input
            placeholder="E.g. 5"
            type="number"
            label="Vacancy"
            Icon={UsersRound}
            disabled={isPending}
            {...register("vacancy")}
          />
        </div>

        <TextArea
          placeholder="Description"
          label="Job Description"
          Icon={ListCollapse}
          disabled={isPending}
          {...register("jobDescription")}
        />

        <div>
          <Input
            placeholder="Job Requirements"
            label="Requirements"
            Icon={ScrollText}
            disabled={isPending}
            value={requirementText}
            onChange={(e) => setRequirementText(e.target.value)}
          />
          <div className="flex justify-end my-4">
            <Button
              variant="outline"
              style={{ padding: 0 }}
              className="!size-[30px] xs:!size-[35px]"
              onClick={onRequirement}
            >
              <Plus className="size-5 xs:size-6" />
            </Button>
          </div>
          <div className="space-y-4">
            {requirements.length > 0 &&
              requirements.map((req, i) => (
                <div
                  className="flex justify-between bg-gray-100 rounded-lg p-4 mt-4 text-dark-2"
                  key={i}
                >
                  <p className="flex gap-2 font-medium text-sm">
                    <span>{i + 1}.</span> {req}
                  </p>
                  <button type="button">
                    <X className="size-5" />
                  </button>
                </div>
              ))}
          </div>
        </div>
        <div>
          <Input
            placeholder="Job Responsibilities"
            label="Responsibilites"
            Icon={ClipboardList}
            disabled={isPending}
            value={responsibilitiesText}
            onChange={(e) => setResponsibilitiesText(e.target.value)}
          />
          <div className="flex justify-end my-4">
            <Button
              variant="outline"
              style={{ padding: 0 }}
              className="!size-[30px] xs:!size-[35px]"
              onClick={() => {
                const allResponsibilities: any = [...responsibilities];

                allResponsibilities.push(responsibilitiesText);

                setResponsibilities(allResponsibilities);
                setResponsibilitiesText("");
                setValue("responsibilities", allResponsibilities);
              }}
            >
              <Plus className="size-5 xs:size-6" />
            </Button>
          </div>
          <div className="space-y-4">
            {responsibilities.length > 0 &&
              responsibilities.map((res, i) => (
                <div
                  className="flex justify-between bg-gray-100 rounded-lg p-4 mt-4 text-dark-2"
                  key={i}
                >
                  <p className="flex gap-2 font-medium text-sm">
                    <span className="shrink-0">{i + 1}.</span> {res}
                  </p>
                  <button type="button">
                    <X className="size-5" />
                  </button>
                </div>
              ))}
          </div>
        </div>
        <Input
          placeholder="Application deadline"
          type="date"
          label="Deadline"
          Icon={Calendar}
          disabled={isPending}
          {...register("deadline")}
        />
        <Button type="submit" disabled={isPending}>
          Post Job
        </Button>
      </form>
    </div>
  );
};

export default JobForm;
