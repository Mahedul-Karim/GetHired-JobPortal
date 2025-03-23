import React, { useState,useReducer } from "react";
import Input from "../../form/Input";
import Modal from "../Modal";
import Button from "../../button/Button";
import Checkbox from "../../check/Checkbox";
import TextArea from "../../form/TextArea";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  experiences: any[];
  setResume: any;
}

const initialValues={
  title:""
}

const reducer = (state,action)=>{
  console.log(state,action);
  return state;
}

const ExperienceModal: React.FC<Props> = ({
  open,
  setOpen,
  experiences,
  setResume,
}) => {

  const [state,dispatch] = useReducer(reducer,initialValues);

  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  
  const handleSubmit=()=>{
    dispatch('hello world')
  }

  console.log(state)

  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Experience">
      <form className="space-y-4">
        <Input placeholder="Enter your position" label="Working Title" />
        <Input placeholder="Enter your company name" label="Company" />
        <Input
          placeholder="Worked or Working for"
          label="Experience"
          type="text"
        />
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
              checked={currentlyWorking}
              onChange={() => setCurrentlyWorking(true)}
            />
            <Checkbox
              name="Working"
              checkId="working-2"
              value="no"
              label="No"
              checked={!currentlyWorking}
              onChange={() => setCurrentlyWorking(false)}
            />
          </div>
          <div className="flex flex-col xs:flex-row xs:items-center gap-4 mt-4">
            <Input
              placeholder=""
              label="Working From"
              type="date"
              containerClass="w-full"
            />
            {!currentlyWorking && (
              <Input
                placeholder=""
                label="Worked Till"
                type="date"
                containerClass="w-full"
              />
            )}
          </div>
        </div>
        <TextArea
          placeholder="Extra Description"
          label="Write Description(optional)"
        />
        <Button>Submit</Button>
      </form>
    </Modal>
  );
};

export default ExperienceModal;
