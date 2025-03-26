import React, { useReducer } from "react";
import Button from "../../button/Button";
import Input from "../../form/Input";
import Modal from "../Modal";
import TextArea from "../../form/TextArea";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  education: any[];
  setResume: any;
  haveResume: boolean;
  setNewResume: any;
  isUpdating: boolean;
  updateResume: any;
}

const initialValues = {
  degree: "",
  university: "",
  startDate: null,
  endDate: null,
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

const EducationModal: React.FC<Props> = ({
  open,
  setOpen,
  education,
  setResume,
}) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const { degree, university, startDate, endDate } = state;

  const handleSubmit = () => {
    const filteredValues = Object.fromEntries(
      Object.entries(state).filter(
        ([_, value]) => value !== null && value !== ""
      )
    );

    setResume((prev: any) => ({
      ...prev,
      education: [...education, filteredValues],
    }));
    dispatch({ type: "reset" });
    setOpen(false);
  };

  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Education">
      <div className="space-y-4">
        <Input
          placeholder="Example: Bachelor of Science"
          label="Degree"
          value={degree}
          onChange={(e) => dispatch({ type: "degree", value: e.target.value })}
        />
        <Input
          placeholder="Enter your university name"
          label="University"
          value={university}
          onChange={(e) =>
            dispatch({ type: "university", value: e.target.value })
          }
        />
        <Input
          placeholder=""
          type="date"
          label="Start Date"
          value={startDate ? startDate.toISOString().split("T")[0] : ""}
          onChange={(e) =>
            dispatch({ type: "startDate", value: new Date(e.target.value) })
          }
        />
        <Input
          type="date"
          placeholder=""
          label="End Date"
          value={endDate ? endDate.toISOString().split("T")[0] : ""}
          onChange={(e) =>
            dispatch({ type: "endDate", value: new Date(e.target.value) })
          }
        />
        <TextArea
          placeholder="Extra Description"
          label="Write Description(optional)"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default EducationModal;
