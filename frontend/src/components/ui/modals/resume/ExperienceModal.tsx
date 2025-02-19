import React, { useState } from "react";
import Input from "../../form/Input";
import Modal from "../Modal";
import Button from "../../button/Button";
import Checkbox from "../../check/Checkbox";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExperienceModal: React.FC<Props> = ({ open, setOpen }) => {
  const [currentlyWorking, setCurrentlyWorking] = useState("no");

  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Experience">
      <form className="space-y-4">
        <Input placeholder="Enter your position" label="Working Title" />
        <Input placeholder="Enter your company name" label="Company" />
        <div>
          <label className="font-medium mb-1 inline-block text-dark-2">
            Currently Working Here?
          </label>
          <div className="flex items-center gap-4">
            <Checkbox
              name="working"
              checkId="working-1"
              value="yes"
              label="Yes"
              checked={currentlyWorking === "yes"}
              onChange={(e) => setCurrentlyWorking(e.target.value)}
            />
            <Checkbox
              name="Working"
              checkId="working-2"
              value="no"
              label="No"
              checked={currentlyWorking === "no"}
              onChange={(e) => setCurrentlyWorking(e.target.value)}
            />
          </div>
          <div className="flex flex-col xs:flex-row xs:items-center gap-4 mt-4">
            <Input placeholder="" label="Working From" type="date" containerClass="w-full"/>
            <Input placeholder="" label="Worked Till" type="date" containerClass="w-full"/>
          </div>
        </div>

        <Button>Submit</Button>
      </form>
    </Modal>
  );
};

export default ExperienceModal;
