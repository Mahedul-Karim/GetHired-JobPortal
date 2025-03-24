import React, { useState, useReducer } from "react";
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

const initialValues = {
  workingPosition: "",
  currentlyWorking: false,
  companyName: "",
  workedFor: "",
  startDate: null,
  endDate: null,
  description: "",
};

const reducer = (state: any, action: any) => {
  if (typeof action.type !== "string") {
    console.error("Invalid action type!");
    return state;
  }

  if (action.type === "reset") {
    return initialValues;
  }

  return {
    ...state,
    [action.type]: action.value,
  };
};

const ExperienceModal: React.FC<Props> = ({
  open,
  setOpen,
  experiences,
  setResume,
}) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const {
    currentlyWorking,
    workingPosition,
    companyName,
    workedFor,
    startDate,
    endDate,
    description,
  } = state;

  const handleSubmit = () => {
    const filteredValues = Object.fromEntries(
      Object.entries(state).filter(
        ([_, value]) => value !== null && value !== ""
      )
    );

    

    setResume({ experiences: [...experiences, filteredValues] });
    dispatch({ type: "reset" });
    setOpen(false);
  };

  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Experience">
      <form className="space-y-4">
        <Input
          placeholder="Enter your position"
          label="Working Title"
          value={workingPosition}
          onChange={(e) =>
            dispatch({ type: "workingPosition", value: e.target.value })
          }
        />
        <Input
          placeholder="Enter your company name"
          label="Company"
          value={companyName}
          onChange={(e) =>
            dispatch({ type: "companyName", value: e.target.value })
          }
        />
        <Input
          placeholder="Worked or Working for"
          label="Experience"
          type="text"
          value={workedFor}
          onChange={(e) =>
            dispatch({ type: "workedFor", value: e.target.value })
          }
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
              onChange={() =>
                dispatch({ type: "currentlyWorking", value: true })
              }
            />
            <Checkbox
              name="Working"
              checkId="working-2"
              value="no"
              label="No"
              checked={!currentlyWorking}
              onChange={() =>
                dispatch({ type: "currentlyWorking", value: false })
              }
            />
          </div>
          <div className="flex flex-col xs:flex-row xs:items-center gap-4 mt-4">
            <Input
              placeholder=""
              label="Working From"
              type="date"
              containerClass="w-full"
              value={startDate ? startDate.toISOString().split("T")[0] : ""}
              onChange={(e) =>
                dispatch({ type: "startDate", value: new Date(e.target.value) })
              }
            />
            {!currentlyWorking && (
              <Input
                placeholder=""
                label="Worked Till"
                type="date"
                containerClass="w-full"
                value={endDate ? endDate.toISOString().split("T")[0] : ""}
                onChange={(e) =>
                  dispatch({ type: "endDate", value: new Date(e.target.value) })
                }
              />
            )}
          </div>
        </div>
        <TextArea
          placeholder="Extra Description"
          label="Write Description(optional)"
          value={description}
          onChange={(e) =>
            dispatch({ type: "description", value: e.target.value })
          }
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </Modal>
  );
};

export default ExperienceModal;
